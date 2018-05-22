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
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3), 
      UserNameValidators.shouldBeUnique
    ]),
    password: new FormControl('',Validators.required)
  })
 get username(){
    return this.form.get('username');
  }
  log(x){
    console.log(x);
  }
}
