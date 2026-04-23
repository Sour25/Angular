import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.html',
  styleUrl: './material-test.css',
  imports: [
    MatButtonModule,
    MatIconModule,
    
  ],
})
export class MaterialTest { }
