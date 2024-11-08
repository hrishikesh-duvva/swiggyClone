// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.cart);

  constructor() {}

  addToCart(item: any) {
    const existingItem = this.cart.find(cartItem => cartItem.item_id === item.item_id && cartItem.restaurant_id === item.restaurant_id );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    this.cartSubject.next(this.cart);
  }
  updateQuantity(item_id: number,restaurant_id: number, quantity: number) {
    const item = this.cart.find(cartItem => cartItem.item_id === item_id  && cartItem.restaurant_id === restaurant_id);
    if (item) {
      item.quantity = quantity;
      this.cartSubject.next(this.cart);
    }
  }

  getCartItems() {
    return this.cartSubject.asObservable();  
  }

  getCartCount() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0); 
  }
  getTotalPrice() {
    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0); 
  }
}
