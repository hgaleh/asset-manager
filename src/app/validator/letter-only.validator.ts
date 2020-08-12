import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

export function letterOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const letterOnly: RegExp = /^[a-zA-Z ]+$/;
        const valid = letterOnly.test(control.value);
        return valid ? null : { letterOnly: {value: control.value} };
    }
}