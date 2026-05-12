import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.html',
  styleUrl: './menu-form.css',
  imports: [

  ],
})
export class MenuForm  implements OnInit{
  constructor(
    private route: ActivatedRoute
  ) { 
    
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
}
