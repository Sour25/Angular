import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cart-panel',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <h2>Invoice</h2>
      <p>No items yet</p>
    </mat-card>
  `
})
export class CartPanelComponent { }