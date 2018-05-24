import { Component, OnInit,group } from '@angular/core';
import { FormGroup,Validators, FormControl, FormBuilder } from '@angular/forms';
import { passwordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
 
  form:FormGroup;
  constructor(fb:FormBuilder){
    this.form=fb.group({ 
    oldPassword:['',Validators.required,passwordValidators.matchOldPassword],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    },{validator:passwordValidators.matchNewPassword});
  }
  _form(required){
      return this.form.get(required);
  }
  new_formGroup(required){
    return this.form.get(''+required);
  }
}
