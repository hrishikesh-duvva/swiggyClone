import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodListComponent } from './food-list/food-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';
import { CartService } from './cart.service';
import { SigninComponent } from "./signin/signin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FoodListComponent, RestaurantListComponent, FooterComponent, NgIf, SigninComponent],
  providers:[CartService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy-clone';
  isMenuRoute = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) 
    ).subscribe(() => {
      this.isMenuRoute = this.router.url.includes('/menu'); 
    });
  }

}
