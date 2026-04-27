import { Component } from '@angular/core';
import { FoodItemComponent } from '../food-items/food-items';


@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [FoodItemComponent],
  templateUrl: './menu-list.html',
  styleUrl:'./menu-list.css'
})
export class MenuListComponent {

  foods = [
    { name: 'Pasta', price: 50, image: '' },
    { name: 'Chicken', price: 45, image: '' },
    { name: 'Steak', price: 80, image: '' },
  ];

}