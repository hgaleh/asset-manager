import { Component, OnInit } from '@angular/core';
import { ComboModel } from '../model/combo.model';
import { UserService } from '../service/user.service';
import { NotificationService } from '@progress/kendo-angular-notification';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { historyDateValidator } from '../validator/history-date.validator';
import { letterOnlyValidator } from '../validator/letter-only.validator';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  sexList: Array<ComboModel>;
  initList: Array<ComboModel>;
  nationalityList: Array<ComboModel>;
  model = new FormGroup({});
  constructor(
    private service: UserService,
    private notificationService: NotificationService,
    private router: Router,
    private fb: FormBuilder,
  ) {  
    this.model = this.fb.group({
      sex: ['', Validators.required],
      initials: [''],
      firstName: ['', [Validators.required, letterOnlyValidator()]],
      lastName: ['', [Validators.required, letterOnlyValidator()]],
      dateOfBirth: ['', [Validators.required, historyDateValidator(new Date())]],
      nationality: ['', Validators.required],
      socialSecurityNumber: ['', [Validators.required, Validators.max(9999999999), Validators.min(999)]]
    });
    this.model.patchValue(this.service.getBasic());
  }
  
  ngOnInit(): void {
    this.sexList = this.service.getSex();
    this.initList = this.service.getInitials();
    this.nationalityList = this.service.getCountries();
  }

  onSubmit() {
    this.service.saveBasic(this.model.value);
    this.notificationService.show(
      {
        content: 'Saved!',
        hideAfter: 600,
        position: { horizontal: 'center', vertical: 'top' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'success', icon: true }
      }
    );
    this.router.navigate(['./address']);
  }

  private control(name: string) { return this.model.get(name)}

  get sex() { return this.control('sex')}
  get initials() { return this.control('initials')}
  get firstName() { return this.control('firstName')}
  get lastName() { return this.control('lastName')}
  get dateOfBirth() { return this.control('dateOfBirth')}
  get nationality() { return this.control('nationality')}
  get socialSecurityNumber() { return this.control('socialSecurityNumber')}
}
