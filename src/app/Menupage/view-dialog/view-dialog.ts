import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-view-dialog',
  standalone: true,
  templateUrl: 'view-dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule
  ],
})
export class ViewDialog  implements OnInit{ 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
  }
  ngOnInit(): void {
    console.log("this is the data from parent::", this.data);
  }
}