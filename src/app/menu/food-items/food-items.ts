import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './food-item.html',
})
export class FoodItemComponent {
  @Input() food!: any;
}