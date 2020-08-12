import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

export function letterValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const letterOnly: RegExp = /^[a-zA-Z ]+$/;
        const valid = letterOnly.test(control.value);
        console.log(valid)
        return valid ? null : { letter: {value: control.value} };
    }
}