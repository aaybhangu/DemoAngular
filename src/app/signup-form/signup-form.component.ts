import { Component, OnInit, group } from '@angular/core';
import { FormGroup, FormControl, Validators} from'@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',[
        Validators.required, 
        Validators.minLength(3), 
        UserNameValidators.cannotContainSpace],
        UserNameValidators.shouldBeUnique
      ),
      password: new FormControl('',Validators.required)
    })
  })
 get username(){
    return this.form.get('account.username');
  }
  login(){
    //let isValid = authService.login(this.form.value);
    //if(!isValid){
      this.form.setErrors({
        invalidLogin:true
      });
   // }
  }
}
