import { Component, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.html',
  styleUrl: './category.css',
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule
    
  ],
})
  
export class CategoryComponent {
  activeId = signal('lunch');

  @Output() categoryChange = new EventEmitter<string>();

  categories = [
    { id: 'breakfast', name: 'Breakfast', icon: 'free_breakfast' },
    { id: 'lunch', name: 'Lunch', icon: 'lunch_dining' },
    { id: 'dinner', name: 'Dinner', icon: 'dinner_dining' },
    { id: 'soup', name: 'Soup', icon: 'soup_kitchen' },
    { id: 'desserts', name: 'Desserts', icon: 'icecream' },
    { id: 'side_dish', name: 'Side Dish', icon: 'restaurant' },
    { id: 'appetizer', name: 'Appetizer', icon: 'tapas' },
    { id: 'beverages', name: 'Beverages', icon: 'local_cafe' },
  ];

  select(id: string) {
    this.activeId.set(id);
    this.categoryChange.emit(id);
  }
}