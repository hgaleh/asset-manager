import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

export function numberOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const numberOnly: RegExp = /^[0-9]+$/;
        const valid = numberOnly.test(control.value);
        return valid ? null : { numberOnly: {value: control.value} };
    }
}