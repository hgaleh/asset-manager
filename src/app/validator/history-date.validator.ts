import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

export function historyDateValidator(today: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const invalid = control.value >= today;
        return invalid ? { historyDate: {value: control.value} } : null;
    }
}