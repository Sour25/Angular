import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TestService } from '../../services/test.service';
import { CommonModule } from '@angular/common';

export interface Tabledata {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-menupage',
  standalone: true,
  templateUrl: './menupage.html',
  styleUrl: './menupage.css',
  imports: [
    MatTableModule,
    CommonModule,
  ],
})
export class TableBasicExample implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  dataSource: Tabledata[] = [];

  constructor(private _testService: TestService) { }

  ngOnInit(): void {
    this.getTestData();
  }

  public getTestData() {
    this._testService.getData().subscribe((res: any) => {
      console.log('API response:', res);

      // Convert API → table format
      this.dataSource = Object.keys(res.headers).map((key, index) => ({
        position: index + 1,
        name: key,                      
        weight: res.headers[key].length, 
        symbol: res.headers[key]        
      }));
    });
  }
}