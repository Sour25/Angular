import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  templateUrl: './delete-dialog.html',
  styleUrl: './delete-dialog.css',
  imports: [
    MatDialogModule,
    MatButtonModule
  ]
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}