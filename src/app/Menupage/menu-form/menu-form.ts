import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../services/test.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PhoneNumberFormatDirective } from '../../share/directives/phone-number.directive';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';
import { Spinner } from "../../share/spinner/spinner/spinner";

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
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PhoneNumberFormatDirective,
    MatButtonModule,
    Spinner
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
    private router: Router,
    private spinner: NgxSpinnerService

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
    if (this.menuForm.invalid) {
      this.menuForm.markAllAsTouched();
      return;
    }
    this.spinner.show();
    const payload = this.menuForm.value;
    this._testService.createData(payload).subscribe({
      next: (response: any) => {
        this.router.navigate(['/menu-table']);
      },
      error: (err: any) => {
        console.error(err);

      },
      complete: () => {
        this.spinner.hide();
      }
    });


  }

 public update(): void {
  if (this.menuForm.invalid) {
    this.menuForm.markAllAsTouched();
    return;
  }

  this.spinner.show();

  const payload = this.menuForm.value;
  const iabcid = this.id;

  this._testService.updateData(iabcid, payload).subscribe({
    next: (response: any) => {
      this.router.navigate(['/menu-table']);
    },

    error: (err: any) => {
      console.error(err);
    },

    complete: () => {
      this.spinner.hide();
    }
  });
}


  public getTestData(): void {
    this._testService.getDataById().subscribe((response: any) => {
      this.data = response || [];
      console.log("test log", this.data);
      const item = this.data[0];
      this.menuForm.patchValue({
        name: item.name,
        familyName: item?.familyName,
        academy: item.academy,
        phoneNumber: item.phoneNumber,
        createdAt: item.createdAt,
        isMarry: item.isMarry,
        email: item.email,



      })

    });
  }

  public initForm() {
    this.menuForm = this.formBuilder.group({
      name: ['', Validators.required],
      familyName: ['', Validators.required],
      academy: ['', Validators.required],
      isMarry: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      createdAt: ['', Validators.required],
      email: ['', Validators.email]
    });

  }

  public onSave(): void {
    if (this.isNew) {
      this.create();
    } else {
      this.update();
    }

  }
  public onCancel(): void {
    this.router.navigate(['/menu-table']);
  }


}