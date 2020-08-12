import { Component, OnInit } from '@angular/core';
import { ComboModel } from '../model/combo.model';
import { UserService } from '../service/user.service';
import { NotificationService } from '@progress/kendo-angular-notification';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { letterOnlyValidator } from '../validator/letter-only.validator';
import { numberOnlyValidator } from '../validator/number.validator';

@Component({
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  countryList: Array<ComboModel>;
  model = new FormGroup({});
  constructor(
    private service: UserService,
    private notificationService: NotificationService,
    private router: Router,
    private fb: FormBuilder,
  ) {  
    this.model = this.fb.group({
      addressLineOne: ['', [Validators.required, letterOnlyValidator()]],
      addressLineTwo: ['', letterOnlyValidator()],
      postalCode: ['', Validators.required],
      city: ['', [Validators.required, letterOnlyValidator()]],
      country: ['', Validators.required],
      phoneNumber: ['', [Validators.required, numberOnlyValidator()]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.model.patchValue(this.service.getAddress());
  }
  
  ngOnInit(): void {
    this.countryList = this.service.getCountries();
  }

  onSubmit() {
    this.service.saveAddress(this.model.value);
    this.notificationService.show(
      {
        content: 'Saved!',
        hideAfter: 600,
        position: { horizontal: 'center', vertical: 'top' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'success', icon: true }
      }
    );
    this.router.navigate(['./review']);
  }

  private control(name: string) { return this.model.get(name)}

  get addressLineOne() { return this.control('addressLineOne') }
  get addressLineTwo() { return this.control('addressLineTwo') }
  get postalCode() { return this.control('postalCode') }
  get city() { return this.control('city') }
  get country() { return this.control('country') }
  get phoneNumber() { return this.control('phoneNumber') }
  get email() { return this.control('email') }
}
