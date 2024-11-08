import { Routes } from '@angular/router';
import MenuComponent from './menu/menu.component';
export const routes: Routes = [
    {
        path:"menu/:res_id",component:MenuComponent 
    }
];
