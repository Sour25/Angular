import { Component } from '@angular/core';
import { SidebarComponent } from './layout/sidebar/sidebar';
import { TopbarComponent } from './layout/topbar/topbar';
import { MenuListComponent } from './menu/menu-list/menu-list';
import { CartPanelComponent } from './cart/cart-panel/cart-panel';
import { CartItem } from './menu/food-items/food-items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    MenuListComponent,
    CartPanelComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  cart: CartItem[] = []; 
}