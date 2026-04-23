import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialTest } from './test/material-test/material-test';
import { CheckboxOverviewExample } from './test/material-test1/material-test1';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterOutlet,
    MaterialTest,
    CheckboxOverviewExample
  ],
})
export class App {
  protected readonly title = signal('angular');
}
