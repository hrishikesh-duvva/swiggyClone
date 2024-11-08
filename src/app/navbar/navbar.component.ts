import { Component, HostListener, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SigninComponent } from '../signin/signin.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SigninComponent, NgIf,NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  cartCount: number = 0;  // Initialize cart count
  showCartDropdown = false;
  cartItems: any[] = []; 
  totalPrice: number = 0;  

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to cart count
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  toggleCartDropdown(show: boolean, event: MouseEvent) {
    event.preventDefault();  
    this.showCartDropdown = show;
  }
  incrementQuantity(item: any) {
    this.cartService.updateQuantity(item.item_id,item.restaurant_id, item.quantity + 1);
  }
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.item_id,item.restaurant_id, item.quantity - 1);
    }
  }
  checkout() {
    alert('Proceeding to checkout!');
  }
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const cartDropdown = document.getElementById('cartDropdown');
    if (cartDropdown && !cartDropdown.contains(event.target as Node)) {
      this.showCartDropdown = false;
    }
  }

  showSignin = false;

  toggleSignin() {
    this.showSignin = !this.showSignin;
    // console.log
    (this.showSignin);
  }

  userName: string | null = null; 
  updateUser(userName: string) {
    this.userName = userName;
    this.toggleSignin(); // Close the sign-in modal
  }


  

}
