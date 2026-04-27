import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from './layout/sidebar/sidebar';
import { TopbarComponent } from './layout/topbar/topbar';
import { MenuListComponent } from './menu/menu-list/menu-list';
import { CartPanelComponent } from './cart/cart-panel/cart-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    TopbarComponent,
    MenuListComponent,
    CartPanelComponent,
  
    

  ],
  templateUrl: './app.html',
})
export class App { }