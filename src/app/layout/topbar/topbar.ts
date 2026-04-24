import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatToolbarModule, MatInputModule],
  template: './topbar.html'
})
  
export class TopbarComponent { }