import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { TestService } from '../../services/test.service';
import { ViewDialog } from '../view-dialog/view-dialog';
import { after } from 'node:test';

@Component({
  selector: 'app-menupage',
  standalone: true,
  templateUrl: './menupage.html',
  styleUrl: './menupage.css',
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class TableBasicExample implements OnInit {

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'star'
  ];

  dataSource: any[] = [];

  constructor(
    private _testService: TestService,
    private _dialog: MatDialog
  ) { }

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

  public onView(abc: any): void {
    console.log(abc);
    this._dialog.open(ViewDialog, {
      height: '300px',
      width: '600px',
      data: abc
      
    }).afterClosed().subscribe((item) => {
      console.log(item);

    });

  }

  public onUpdate(): void {

  }

  public onDelete(): void {

  }
}