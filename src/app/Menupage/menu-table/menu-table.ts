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
    private router: Router
  ) { 

  }

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'star'
  ];

  dataSource: any[] = [];


  ngOnInit(): void {
    this.getTestData();
  }

  public getTestData(): void {
    this._testService.getData().subscribe((response: any) => {

      if (response.code === 200.0) {
        this.dataSource = response?.result?.result || [];
      }

    });
  }

  public onView(item: any): void {
    console.log(item);
    this._dialog.open(ViewDialog, {
      width: '600px',
      data: item

    }).afterClosed().subscribe((item) => {
      console.log(item);

    });

  }

  public onUpdate(id: string): void {
    this.router.navigate(['/menu-form', id]);

  }

  public onDelete(): void {

  }
}





