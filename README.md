# Swiggy Clone

I built this project as a simplified web application clone of the highly popular Indian food delivery service, Swiggy built with Angular.

## Features

* **Browse Restaurants:You can view a list of restaurants along with their menus.** Restaurants offering specific cuisines of Biryani, Pizzas, Burgers.** You can select the quantity and add items to your cart.application clone of the popular Indian food delivery service Swiggy, built with Angular.

## Features

* **Browse Restaurants:** View a list of restaurants with their menus.
* **Filter by Cuisine:**  See restaurants offering specific cuisines (e.g., Biryani, Pizzas, Burgers).
* **Add to Cart:**  Add items to your cart with quantity selection.
* **View Cart:** Review your total price of your cart items.** An elementary sign in process: phone number, OTP.tion clone of the popular Indian food delivery service Swiggy, built with Angular.

## Features

* **Browse Restaurants:** View a list of restaurants with their menus.
* **Filter by Cuisine:**  See restaurants offering specific cuisines (e.g., Biryani, Pizzas, Burgers).
* **Add to Cart:**  Add items to your cart with quantity selection.
* **View Cart:** Review your cart items and total price.
* **User Authentication:**  Basic sign-in functionality with phone number and OTP.
### `NavbarComponent`

* This will show the navigation bar with Swiggy logo, search bar and user sign in, sometimes with cart too.
* It handles the user authentication (sign in / sign out).
* Shows the item count and total price in cart dropdown.
* It handles cart item quantity updates.

### `FoodListComponent`

It presents a horizontal scrolling list of food categories.
* Scrolling left and right through the categories is enabled for users.

### `RestaurantListComponent`

* It displays a list of restaurants with their restaurant details (image, restaurant name, cuisine, rating) and offers.
* Navigates to the `MenuComponent` when selecting a restaurant.


### `MenuComponent`

* Shows option which contains the menu for a particular restaurant.
*Calls the restaurant and menu data by using the route parameter res_id.
* Allows customers to add products in their basket.

### `FooterComponent`

* Make the lower portion of the application structural diagram visible.

### `SigninComponent`

The login page was creating to provide modal and security when a user has to log in.
Subsequent to an authentication which may involve the user having to provide a phone number then an OTP.
*Calls an API fabricated for OTP generation and confirmation purpose only.
Dispatches an event, seen by the `NavbarComponent`, to change the name of the user.


## Services

### `AuthService`

In total, those are the following: As for the user’s authentication, it is completely responsible for it.
For instance, it has functions such as sign in and sign out.
* Stored users data in the device storage of their device.

### `CartService`

* Manages the shopping cart.
Ways (Possibility to change number of items and the ability to calculate the total).
Adapts a cart using the ‘BehaviorSubject’ to hold the alterations of the cart and notify the concerned parties of the cart.
