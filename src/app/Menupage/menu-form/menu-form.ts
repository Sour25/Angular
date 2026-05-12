import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../../services/test.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.html',
  styleUrl: './menu-form.css',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatError,
    MatInputModule,
    CommonModule
  ],
})


export class MenuForm implements OnInit {

  public menuForm!: FormGroup;
  isNew: boolean = false;
  // public isUpdate: boolean = false;

  data: any;
  id: any;
  constructor(
    private _route: ActivatedRoute,
    private _testService: TestService,
    private formBuilder: FormBuilder,

  ) {


    this._route.params.subscribe((params: any) => {
      this.id = params['id'] ?? '';
      if (this.id) {
        this.isNew = false;
      } else {
        this.isNew = true;
      }
      // this.isNew = this.id ? false : true
    });




  }

  ngOnInit(): void {
    this.initForm();
    if (this.id) {
      this.getTestData();
    }
  }


  public create(): void {

    console.log("CREATE");

    console.log(this.menuForm.value);

  }

  public update(): void {

    console.log("UPDATE");

    console.log(this.menuForm.value);

  }


  public getTestData(): void {
    this._testService.getData().subscribe((response: any) => {
      if (response.code === 200.0) {
        this.data = response?.result?.result || [];
        console.log("test log", this.data);
        const item = this.data[0];
        this.menuForm.patchValue({
          enLabel: item.enLabel,
          khLabel: item?.khLabel
        })
      }

    });
  }

  public initForm() {
    this.menuForm = this.formBuilder.group({
      enLabel: [''],
      khLabel: [''],

    });
  }

  public onSave(): void {

    if (this.isNew) {

      this.create();

    } else {

      this.update();

    }

  }


}

