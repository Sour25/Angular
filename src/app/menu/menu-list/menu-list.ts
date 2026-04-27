import { Component, Input, Output, EventEmitter, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category';
import { FoodItemsComponent, MenuItem, CartItem } from '../food-items/food-items';

const ALL_ITEMS: MenuItem[] = [
  // Lunch
  { id: 1, name: 'Pasta Bolognese', description: 'Rich beef ragu with fresh tagliatelle and parmesan', price: 50.5, image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&q=80', category: 'lunch' },
  { id: 2, name: 'Spicy Fried Chicken', description: 'Crispy southern-style chicken with hot honey glaze', price: 45.7, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300&q=80', category: 'lunch' },
  { id: 3, name: 'Grilled Steak', description: 'Prime ribeye with herb butter and roasted potatoes', price: 80.0, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80', category: 'lunch' },
  { id: 4, name: 'Fish And Chips', description: 'Beer-battered cod with thick-cut chips and tartar sauce', price: 90.4, image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=80', category: 'lunch' },
  { id: 5, name: 'Beef Bourguignon', description: 'Slow-braised beef in red wine with pearl onions', price: 75.5, image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=300&q=80', category: 'lunch' },
  { id: 6, name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with guanciale and pecorino', price: 35.3, image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&q=80', category: 'lunch' },
  { id: 7, name: 'Ratatouille', description: 'Provençal vegetable stew with fresh herbs', price: 26.7, image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=300&q=80', category: 'lunch' },
  { id: 8, name: 'Kimchi Jjigae', description: 'Korean kimchi stew with tofu and pork belly', price: 45.7, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80', category: 'lunch' },
  { id: 9, name: 'Tofu Scramble', description: 'Spiced tofu with turmeric, bell peppers and spinach', price: 85.6, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80', category: 'lunch' },
  // Breakfast
  { id: 10, name: 'Eggs Benedict', description: 'Poached eggs on English muffin with hollandaise sauce', price: 32.5, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&q=80', category: 'breakfast' },
  { id: 11, name: 'Avocado Toast', description: 'Sourdough with smashed avocado, feta and chili flakes', price: 28.0, image: 'https://images.unsplash.com/photo-1603046891744-1f13eb3b2bc7?w=300&q=80', category: 'breakfast' },
  { id: 12, name: 'French Pancakes', description: 'Thin crêpes with maple syrup and fresh berries', price: 22.5, image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300&q=80', category: 'breakfast' },
  // Dinner
  { id: 13, name: 'Roast Chicken', description: 'Free-range chicken with roasted root vegetables', price: 65.0, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=300&q=80', category: 'dinner' },
  { id: 14, name: 'Salmon Teriyaki', description: 'Glazed salmon fillet with steamed jasmine rice', price: 72.0, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&q=80', category: 'dinner' },
  // Soup
  { id: 15, name: 'French Onion Soup', description: 'Classic gratinéed soup with gruyère crouton', price: 18.0, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80', category: 'soup' },
  { id: 16, name: 'Tom Yum', description: 'Thai hot and sour soup with shrimp and lemongrass', price: 22.0, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&q=80', category: 'soup' },
  // Desserts
  { id: 17, name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone and espresso', price: 24.0, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&q=80', category: 'desserts' },
  { id: 18, name: 'Crème Brûlée', description: 'Vanilla custard with caramelized sugar crust', price: 20.0, image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=300&q=80', category: 'desserts' },
  // Beverages
  { id: 19, name: 'Fresh Lemonade', description: 'House-made lemonade with mint and fresh basil', price: 8.5, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300&q=80', category: 'beverages' },
  { id: 20, name: 'Iced Matcha Latte', description: 'Ceremonial grade matcha with oat milk over ice', price: 12.0, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80', category: 'beverages' },
  // Side dish
  { id: 21, name: 'Garlic Bread', description: 'Toasted sourdough with roasted garlic butter and herbs', price: 9.0, image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=300&q=80', category: 'side_dish' },
  { id: 22, name: 'Truffle Fries', description: 'Crispy fries tossed in truffle oil with parmesan', price: 14.5, image: 'https://images.unsplash.com/photo-1576107232684-1279f2f29aca?w=300&q=80', category: 'side_dish' },
  // Appetizer
  { id: 23, name: 'Bruschetta', description: 'Toasted bread with tomatoes, basil and extra virgin olive', price: 13.0, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&q=80', category: 'appetizer' },
  { id: 24, name: 'Calamari Fritti', description: 'Crispy fried squid rings with marinara dipping sauce', price: 18.5, image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=300&q=80', category: 'appetizer' },
];

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, CategoryComponent, FoodItemsComponent],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.css',
})
export class MenuListComponent {
  @Input() cart: CartItem[] = [];
  @Output() cartChange = new EventEmitter<CartItem[]>();

  activeCategory = signal('lunch');

  visibleItems = computed(() =>
    ALL_ITEMS.filter(i => i.category === this.activeCategory())
  );

  getCategoryLabel = computed(() => {
    const map: Record<string, string> = {
      breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner',
      soup: 'Soup', desserts: 'Desserts', side_dish: 'Side Dish',
      appetizer: 'Appetizer', beverages: 'Beverages',
    };
    return map[this.activeCategory()] ?? '';
  });

  onCategoryChange(id: string) {
    this.activeCategory.set(id);
  }

  getQty(itemId: number): number {
    return this.cart.find(c => c.id === itemId)?.quantity ?? 0;
  }

  onAdd(item: MenuItem) {
    const updated = [...this.cart];
    const found = updated.find(c => c.id === item.id);
    if (found) {
      found.quantity++;
    } else {
      updated.push({ ...item, quantity: 1, note: 'Dont Add Vegetables' });
    }
    this.cartChange.emit(updated);
  }

  onRemove(item: MenuItem) {
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
}