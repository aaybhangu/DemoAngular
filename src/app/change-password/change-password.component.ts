import { Component, OnInit,group } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { passwordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
 
  form=new FormGroup({
    oldPassword:new FormControl('',Validators.required,passwordValidators.matchPassword),
    newPassword:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required,passwordValidators.matchPassword),
  })

  _form(required){
return this.form.get(required);
  }
}
