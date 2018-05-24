import { AbstractControl, ValidationErrors } from "@angular/forms";
import { ChangePasswordComponent } from "./change-password.component";


export class passwordValidators{
  static matchOldPassword(control:AbstractControl): Promise<ValidationErrors|null>{
      return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value != "1234")
            resolve({matchOldPassword:true});
        resolve (null);
      },2000);    
      });
  }
  static matchNewPassword(control:AbstractControl):ValidationErrors|null{ 
     let newPassword = control.get('newPassword');
     let confirmPassword = control.get('confirmPassword');
      if(newPassword != confirmPassword)
        return{invaildPassword:true};
      return null;
  }
}