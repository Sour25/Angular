import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialTest } from './test/material-test/material-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterOutlet,
    MaterialTest
  ],
})
export class App {
  protected readonly title = signal('angular');
}
