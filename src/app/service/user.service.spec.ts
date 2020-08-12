import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { UserService } from './user.service';
import { BasicModel } from '../model/basic.model';
import { AddressModel } from '../model/address.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(UserService);
  });

  it('country list length', () => {
    const l = service.getCountries().length;
    expect(l).toBe(3);
  });

  it('countries include Iran', () => {
    const l = service.getCountries().find(x => x.title === 'Iran');
    expect(l.title).toBe('Iran');
  });

  it('save basic', () => {
    const b = new BasicModel();
    b.sex = 1;
    service.saveBasic(b);
    expect(service.getBasic().sex).toBe(1);
  });

  it('save address', () => {
    const b = new AddressModel();
    b.email = 'asss';
    service.saveAddress(b);
    expect(service.getAddress().email).toBe('asss');
  });

  it('get review', () => {
    const a = new BasicModel();
    a.sex = 1;
    const b = new AddressModel();
    b.email = 'asss';
    service.saveBasic(a);
    service.saveAddress(b);
    const s = service.getReview().sex;
    const e = service.getReview().email;
    expect(s).toBe(1);
    expect(e).toBe('asss');
  });

  it('initials has Mr', () => {
    const mr = service.getInitials().find(x => x.title === 'Mr').title;
    expect(mr).toBe('Mr')
  });

  it('sex list has male', () => {
    const male = service.getSex().find(x => x.title === 'Male').title;
    expect(male).toBe('Male');
  });

  it('get sex by id', () => {
    const male = service.getSexById(0);
    expect(male).toBe('Male');
  });

  it('get country by id', () => {
    const ir = service.getCountryById(0);
    expect(ir).toBe('Iran');
  });

  it('get initials by id', () => {
    const mr = service.getInitialsById(1);
    expect(mr).toBe('Mr');
  });

  it('confirm clears everything', () => {
    const a = new BasicModel();
    a.sex = 1;
    const b = new AddressModel();
    b.email = 'asss';
    service.saveBasic(a);
    service.saveAddress(b);
    service.confirm();
    expect(service.getReview().sex).toBeUndefined();
    expect(service.getReview().email).toBeUndefined();
  });
});
