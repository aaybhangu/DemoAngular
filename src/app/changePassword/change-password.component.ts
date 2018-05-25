import { PasswordValidators } from './password.validators';
import { FormGroup, FormBuilder,Validator, Validators, FormControl, RequiredValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'changePassword',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePassword {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', 
        Validators.required, 
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {Validators: PasswordValidators.passwordsShouldMatch}
  );
  }
/*
  form = new FormGroup({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',[Validators.required,PasswordValidators.testValidator]),
    confirmPassword:new FormControl('',Validators.required),

  });*/

  get oldPassword() { return this.form.get('oldPassword'); }
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }
}
