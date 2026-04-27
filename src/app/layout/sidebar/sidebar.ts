import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  activeIndex = signal(0);

  navItems = [
    { icon: 'grid_view', label: 'Menu' },
    { icon: 'receipt_long', label: 'Orders' },
    { icon: 'calendar_today', label: 'Reservations' },
    { icon: 'bar_chart', label: 'Analytics' },
    { icon: 'description', label: 'Reports' },
    { icon: 'chat_bubble_outline', label: 'Messages' },
  ];

  bottomItems = [
    { icon: 'help_outline', label: 'Help' },
    { icon: 'logout', label: 'Logout' },
  ];
}