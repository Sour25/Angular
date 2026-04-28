import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
  note: string;
}

@Component({
  selector: 'app-food-items',
  standalone: true,
  templateUrl: './food-items.html',
  styleUrl: './food-items.css',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  
  ],
})
export class FoodItemsComponent {
  @Input() item!: MenuItem;
  @Input() quantity = 0;
  @Output() add = new EventEmitter<MenuItem>();
  @Output() remove = new EventEmitter<MenuItem>();
}