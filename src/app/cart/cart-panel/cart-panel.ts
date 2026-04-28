import { Component, Input, Output, EventEmitter, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { CartItem } from '../../menu/food-items/food-items';

@Component({
  selector: 'app-cart-panel',
  standalone: true,
  templateUrl: './cart-panel.html',
  styleUrl: './cart-panel.css',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatRippleModule

  ],
})
  
export class CartPanelComponent {
  
  @Input() cart: CartItem[] = [];
  @Output() cartChange = new EventEmitter<CartItem[]>();

  activePayment = signal<'credit' | 'paylater' | 'cash'>('credit');

  get subTotal(): number {
    return +this.cart.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(1);
  }

  get tax(): number {
    return +(this.subTotal * 0.04).toFixed(1);
  }

  get total(): number {
    return +(this.subTotal + this.tax).toFixed(1);
  }

  removeOne(item: CartItem) {
    const updated = [...this.cart];
    const idx = updated.findIndex(c => c.id === item.id);
    if (idx === -1) return;
    if (updated[idx].quantity > 1) {
      updated[idx] = { ...updated[idx], quantity: updated[idx].quantity - 1 };
    } else {
      updated.splice(idx, 1);
    }
    this.cartChange.emit(updated);
  }
  placeOrder() {
    this.cartChange.emit([]);
    console.log("this is the selected item", this.cart);
  }
  
} 