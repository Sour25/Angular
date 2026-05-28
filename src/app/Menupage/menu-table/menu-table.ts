import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TestService } from '../../services/test.service';
import { ViewDialog } from '../view-dialog/view-dialog';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menupage',
  standalone: true,
  templateUrl: './menu-table.html',
  styleUrl: './menu-table.css',
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule
 
  ],
})
export class menuTable implements OnInit {

  constructor(
    private _testService: TestService,
    private _dialog: MatDialog,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {

  }

  displayedColumns: string[] = [
    'id',
    'name',
    'familyName',
    'academy',
    'isMarry',
    'phoneNumber',
    'createdAt',
    'star'
  
  ];

  dataSource: any[] = [];


  ngOnInit(): void {
    this.getTestData();
  }


  public getTestData(): void {
    this._testService.getData().subscribe((response: any) => {
      console.log("test console", response);
        this.dataSource = response || [];
        this.cdr.detectChanges();
      

    });
  }

  public onView(item: any): void {
    console.log("xxxxxxxx",item);
    this._dialog.open(ViewDialog, {
      width: '600px',
      data: item

    }).afterClosed().subscribe((item) => {
      console.log(item);

    });

  }

  public onUpdate(item: any): void {

    this.router.navigate(
      ['/menu-form', item]
    );

  }
  public new() {
    this.router.navigate(
      ['/menu-form']
    );
  }

  public onDelete(item: any): void {
    const dialogRef = this._dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: item  
    });

    dialogRef.afterClosed().subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        this._testService.deleteData(item.id).subscribe({
          next: (response: any) => {
            
            Swal.fire({
              title: "Good job!",
              text: "Deleted item successfully!",
              icon: "success"
            });
            console.log('Deleted item successfully!');
            this.getTestData(); 
          },
          error: (err: any) => {
            console.error('Failed to delete item:', err);
          }
        });
      }
    });
  }
}





