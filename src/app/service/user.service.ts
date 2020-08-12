import { Injectable } from '@angular/core';
import { BasicModel } from '../model/basic.model';
import { AddressModel } from '../model/address.model';
import { ComboModel } from '../model/combo.model';
import { ReviewModel } from '../model/review.model';
import { BasicComponent } from '../basic/basic.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  basic: BasicModel;
  address: AddressModel;

  saveBasic(model: BasicModel): void {
    this.basic = model;
  }

  getBasic(): BasicModel {
    return this.basic || new BasicModel();
  }

  saveAddress(model: AddressModel): void {
    this.address = model;
  }

  getAddress(): AddressModel {
    return this.address || new AddressModel();
  }

  getReview(): ReviewModel {
    return { ...this.basic, ...this.address };
  }

  confirm(): void {
    this.address = undefined;
    this.basic = undefined;
  }

  getSex(): Array<ComboModel> {
    return [
      {id: 0, title: 'Male'},
      {id: 1, title: 'Female'}
    ];
  }

  getInitials(): Array<ComboModel> {
    return [
      {id: 0, title: 'Dr.'},
      {id: 1, title: 'Mr'},
      {id: 2, title: 'Ms'}
    ];
  }

  getCountries(): Array<ComboModel> {
    return [
      {id: 0, title: 'Iran'},
      {id: 1, title: 'USA'},
      {id: 2, title: 'UAE'}
    ];
  }

  getSexById(id: number): string {
    return this.getSex().find(x => x.id === id).title;
  }

  getInitialsById(id: number): string {
    return this.getInitials().find(x => x.id === id).title;
  }

  getCountryById(id: number): string {
    return this.getCountries().find(x => x.id === id).title;
  }
}
