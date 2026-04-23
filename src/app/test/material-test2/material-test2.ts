import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-material-test2',
  imports: [MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './material-test2.html',
  styleUrl: './material-test2.css',
})
export class MaterialTest2 {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
