import { AbstractControl, ValidationErrors } from "@angular/forms"; 


export class PasswordValidators{
  static matchOldPassword(control:AbstractControl): Promise<ValidationErrors|null>{
      return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value != "1234")
            resolve({matchOldPassword:true});
        resolve (null);
      },2000);    
      });
  }
  /*
  static matchNewPassword(control:AbstractControl){ 
     let newPassword = control.get('newPassword');
     let confirmPassword = control.get('confirmPassword');
     
      if(newPassword.value !== confirmPassword.value)
        return{matchNewPassword:true};
        
      return null;
  }*/

  static passwordsShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value)
        return { passwordsShouldMatch: true };
    
    return null;
}
}