import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export default class MenuComponent implements OnInit {
  res_id!: number;
  restaurant: any = {};
  menu: any[] = [];
  cartService: CartService;

  constructor(private route: ActivatedRoute, cartService: CartService) {
    this.cartService = cartService;  
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.res_id = Number(params.get('res_id'));
      this.loadRestaurantData(this.res_id);
    });
  }

  loadRestaurantData(id: number): void {
    const restaurants = [
      { 
        res_id: 1, 
        name: 'Pizza Hut', 
        cuisine: 'Pizzas', 
        location: 'Attapur', 
        rating: 4.1, 
        offerText: '50% OFF UPTO ₹100',
        deliveryTime: '30-35',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg',
        menu: [
          { item_id: 1, name: 'Margherita', rating: '4.3', description: 'Classic cheese pizza with tomato sauce and mozzarella.', price: 250 },
          { item_id: 2, name: 'Pepperoni Feast', rating: '4.5', description: 'Loaded with pepperoni and extra cheese.', price: 350 },
          { item_id: 3, name: 'Veggie Supreme', rating: '4.4', description: 'A medley of fresh vegetables and flavorful sauce.', price: 320 },
          { item_id: 4, name: 'Chicken Supreme', rating: '4.6', description: 'Grilled chicken, onions, peppers, and mushrooms.', price: 400 },
          { item_id: 5, name: 'Garlic Breadsticks', rating: '4.7', description: 'Buttery garlic breadsticks with a side of marinara sauce.', price: 150 }
        ]
      },
      {
        res_id: 2, 
        name: 'KFC', 
        cuisine: 'Burgers, Fast Food, Rolls & Wraps', 
        location: 'Banjara Hills', 
        rating: 4.7,
        offerText: 'ITEMS AT ₹179', 
        deliveryTime: '25-30',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/72d3ee9c-056b-4d27-8926-f586520f0f91_655339.JPG',
        menu: [
          { item_id: 1, name: 'Zinger Burger', rating: '4.5', description: 'A spicy, crispy chicken patty served with fresh lettuce and mayonnaise.', price: 180 },
          { item_id: 2, name: 'Fried Chicken', rating: '4.7', description: 'Crispy fried chicken pieces seasoned with KFC’s secret blend of spices.', price: 220 },
          { item_id: 3, name: 'Chicken Popcorn', rating: '4.6', description: 'Delicious, bite-sized pieces of chicken, perfect for dipping in sauces.', price: 150 },
          { item_id: 4, name: 'Chicken Bucket', rating: '4.8', description: 'A bucket of crispy fried chicken pieces, great for sharing with friends.', price: 550 },
          { item_id: 5, name: 'Rice Bowlz', rating: '4.2', description: 'Flavorful rice with your choice of chicken and sauce.', price: 200 }
        ]
      },
      { 
        res_id: 3, 
        name: 'McDonald\'s', 
        cuisine: 'Burgers, Beverages, Cafe, Desserts', 
        location: 'Madhapur', 
        rating: 4.3, 
        offerText:'',
        deliveryTime:'25-30',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/b8760761-e47b-4209-b7f1-cb796a2a1b6f_23734.jpg',
        menu: [
            { item_id: 1, name: 'Big Mac', rating: '4.6', description: 'A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions.', price: 280 },
            { item_id: 2, name: 'McChicken', rating: '4.4', description: 'Crispy chicken fillet topped with fresh lettuce and mayo in a soft bun.', price: 150 },
            { item_id: 3, name: 'McNuggets', rating: '4.3', description: 'Crispy chicken nuggets served with a variety of sauces.', price: 180  },
            { item_id: 4, name: 'Fries', rating: '4.1', description: 'Golden and crispy fries served with your choice of dipping sauces.', price: 120 },
            { item_id: 5, name: 'McFlurry', rating: '4.2', description: 'Soft serve ice cream with your choice of toppings (Oreo, M&Ms).', price: 150 }
        ]
    },
    { 
        res_id: 4, 
        name: 'Burger King', 
        cuisine: 'Burgers, American', 
        location: 'Attapur', 
        rating: 4.1, 
        offerText:'',
        deliveryTime:'20-35',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG',
        menu: [
            { item_id: 1, name: 'Whopper', rating: '4.6', description: 'Flame-grilled beef patty with tomatoes, lettuce, mayo, and pickles.', price: 260 },
            { item_id: 2, name: 'Chicken Royale', rating: '4.5', description: 'Crispy chicken patty with lettuce and creamy mayo.', price: 220 },
            { item_id: 3, name: 'Veggie Whopper', rating: '4.7', description: 'Plant-based patty with all the classic Whopper toppings.', price: 240 },
            { item_id: 4, name: 'Onion Rings', rating: '4.4', description: 'Crispy onion rings served with a dipping sauce.', price: 140 },
            { item_id: 5, name: 'Chocolate Sundae', rating: '4.3', description: 'Vanilla soft serve with chocolate fudge and a cherry.', price: 100 }
        ]
    },
    { 
      res_id: 5, 
      name: 'Theobroma', 
      cuisine: 'Desserts', 
      location: 'Somajiguda & Khairtabad', 
      rating: 4.6, 
      offerText:'20% OFF',
      deliveryTime:'25-30',
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/fab20c99-8c62-40a2-b12a-a67fa77336bf_376914.jpg',
      menu: [
          { item_id: 1, name: 'Chocolate Truffle Cake', rating: '4.9', description: 'Rich chocolate truffle cake with a smooth, creamy texture.', price: 650 },
          { item_id: 2, name: 'Cheese Cake', rating: '4.8', description: 'Classic creamy cheesecake with a crispy biscuit base.', price: 580 },
          { item_id: 3, name: 'Red Velvet Cupcake', rating: '4.7', description: 'Velvety, moist red velvet cupcake with cream cheese frosting.', price: 120 },
          { item_id: 4, name: 'Fruit Tart', rating: '4.6', description: 'A buttery tart shell filled with vanilla custard and topped with fresh fruits.', price: 180 },
          { item_id: 5, name: 'Chocolate Brownie', rating: '4.8', description: 'Rich and fudgy brownie with a perfect balance of sweetness and chocolate flavor.', price: 80 }
      ]
  },
  { 
      res_id: 6, 
      name: 'Cafe Niloufer Classic', 
      cuisine: 'Bakery, Beverages, Snacks, Desserts', 
      location: 'Red Hills', 
      rating: 4.7, 
      offerText:'',
      deliveryTime:'30-35',
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1171b83d63d7c203e5f1c3e16980cd89',
      menu: [
          { item_id: 1, name: 'Irani Chai', rating: '4.6', description: 'Strong and milky tea brewed the traditional Irani way.', price: 30 },
          { item_id: 2, name: 'Osmania Biscuit', rating: '4.7', description: 'A slightly sweet and salty biscuit, perfect with chai.', price: 25 },
          { item_id: 3, name: 'Fruit Bun', rating: '4.5', description: 'Soft and sweet bun filled with candied fruits.', price: 40 },
          { item_id: 4, name: 'Chicken Puff', rating: '4.6', description: 'Flaky pastry filled with savory chicken filling.', price: 60 },
          { item_id: 5, name: 'Veg Puff', rating: '4.4', description: 'Crispy puff pastry with a flavorful vegetable filling.', price: 50 }
      ]
  },
  { 
      res_id: 7, 
      name: 'Shah Ghouse Hotel & Restaurant', 
      cuisine: 'Biryani, Chinese, Mughlai, Tandoor', 
      location: 'Tolichowki', 
      rating: 4.3, 
      offerText:'10% OFF UPTO ₹40',
      deliveryTime:'20-25',
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ks4d93rjtcbitkzkbqx0',
      menu: [
          { item_id: 1, name: 'Mutton Biryani', rating: '4.6', description: 'Aromatic rice dish with tender mutton and spices.', price: 350 },
          { item_id: 2, name: 'Chicken Biryani', rating: '4.4', description: 'Flavorful rice with marinated chicken and a blend of spices.', price: 300 },
          { item_id: 3, name: 'Tandoori Chicken', rating: '4.5', description: 'Chicken marinated in yogurt and spices, cooked in a tandoor.', price: 420 },
          { item_id: 4, name: 'Butter Chicken', rating: '4.3', description: 'Creamy tomato-based curry with tender chicken pieces.', price: 380 },
          { item_id: 5, name: 'Garlic Naan', rating: '4.2', description: 'Soft and fluffy naan bread topped with garlic and cilantro.', price: 80 }
      ]
  }
    ];

    const selectedRestaurant = restaurants.find(r => r.res_id === id);

    if (selectedRestaurant) {
      this.restaurant = selectedRestaurant;
      this.menu = selectedRestaurant.menu;
    }
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);  
  }
}
