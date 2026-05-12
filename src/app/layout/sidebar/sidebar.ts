import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
})

export class SidebarComponent {

  activeIndex = signal(0);

  navItems = [
    {
      icon: 'grid_view',
      label: 'Menu',
      route: '/menu-list'
    },

    {
      icon: 'receipt_long',
      label: 'Menu-table',
      route: '/menu-table'
    },

    {
      icon: 'calendar_today',
      label: 'Reservations',
      route: '/reservations'
    },

    {
      icon: 'bar_chart',
      label: 'Analytics',
      route: '/analytics'
    },

    {
      icon: 'description',
      label: 'Reports',
      route: '/reports'
    },

    {
      icon: 'chat_bubble_outline',
      label: 'Messages',
      route: '/messages'
    },
  ];

  bottomItems = [
    {
      icon: 'help_outline',
      label: 'Help'
    },

    {
      icon: 'logout',
      label: 'Logout'
    },
  ];

}