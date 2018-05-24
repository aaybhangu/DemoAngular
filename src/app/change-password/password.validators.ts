import { AbstractControl, ValidationErrors } from "@angular/forms";


export class passwordValidators{
  static matchPassword(control:AbstractControl): Promise<ValidationErrors|null>{
      return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value != "1234")
            resolve({matchPassword:true});
        resolve (null);
      },2000);    
      });
  }
}