import { Component, OnInit } from '@angular/core';
import { ComboModel } from '../model/combo.model';
import { UserService } from '../service/user.service';
import { NotificationService } from '@progress/kendo-angular-notification';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { historyDateValidator } from '../validator/history-date.validator';
import { letterOnlyValidator } from '../validator/letter-only.validator';
import { ReviewModel } from '../model/review.model';

@Component({
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  
  model: ReviewModel;
  
  constructor(
    private service: UserService,
    private notificationService: NotificationService,
    private router: Router,
  ) {  
    this.model = this.service.getReview();
  }

  get sex(): string {
    return this.service.getSexById(this.model.sex);
  }

  get initials(): string {
    return this.service.getInitialsById(this.model.initials);
  }

  get nationality(): string {
    return this.service.getInitialsById(this.model.nationality);
  }

  get country(): string {
    return this.service.getCountryById(this.model.country);
  }

  confirm() {
    this.service.confirm();
    this.notificationService.show(
      {
        content: 'Confirmed!',
        hideAfter: 600,
        position: { horizontal: 'center', vertical: 'top' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'success', icon: true }
      }
      );
      this.router.navigate(['./basic']);
  }
}
