import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const passwordFormateCheck:ValidatorFn=(control:AbstractControl):ValidationErrors | null=>{

    
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.{8,})[a-zA-Z0-9!@#$%^&*()_+{}|:;?.<>/\\[\]\-='"]+$/;
        if(!passwordPattern.test(control.value)){
            return {passwordFormateNotMatched:true}
        }
        return null
    }
