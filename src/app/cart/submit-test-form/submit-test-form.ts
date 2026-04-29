// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatError, MatFormField, MatFormFieldModule } from '@angular/material/form-field';
// import { MatIcon } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-submit-test-form',
//   templateUrl: './submit-test-form.html',
//   styleUrl: './submit-test-form.css',
//   standalone: true,
//   imports: [
//     MatFormFieldModule,
//     ReactiveFormsModule,
//     FormsModule,
//     MatError,
//     MatFormField,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,



//   ],
// })

// export class SubmitTestForm implements OnInit {
//   public foodForm!: FormGroup;

//   constructor(
//     private readonly _formBuilder: FormBuilder,
//   ) {

//   }
//   ngOnInit(): void {
//     this.initForm();
//   }

//   public initForm(): void {
//     this.foodForm = this._formBuilder.group({
//       khLabel: [''],
//       enLabel: ['']
//     });

//   }


//   public submitForm() {
//     this.sendPayload();
//   }

//   public sendPayload() {
//     const formvalue = this.foodForm.value;
//     console.log("formValue::", formvalue);
    
//   }
 
// }
