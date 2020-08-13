import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';
import { UserService } from '../service/user.service';
import { By, BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotificationService, NotificationModule } from '@progress/kendo-angular-notification';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { NumericTextBoxModule, TextBoxModule, MaskedTextBoxModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule, DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DrawerModule } from '@progress/kendo-angular-layout';
import { ErrorComponent } from '../error/error.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(() => {
    const spyUserService = jasmine.createSpyObj('UserService', ['getBasic', 'getSex', 'getInitials', 'getCountries', 'saveBasic']);
    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);
    spyUserService.getBasic.and.returnValue({});
    TestBed.configureTestingModule({
      declarations: [ BasicComponent, ErrorComponent ],
      providers: [
        { provide: UserService, useValue: spyUserService },
        { provide: Router, useValue: spyRouter },
        NotificationService,
        FormBuilder,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ComboBoxModule,
        NumericTextBoxModule,
        TextBoxModule,
        DateInputsModule,
        DatePickerModule,
        ButtonModule,
        NotificationModule,
        DrawerModule,
        MaskedTextBoxModule,
      ]
    });

    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('put first name', () => {
    const firstName = fixture.debugElement.query(By.css('input[placeholder="First Name"]')).nativeElement;
    firstName.value = 'Hojjat';
    dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const firstNameModel = component.model.get('firstName').value;
    debugger
    expect(firstNameModel).toBe(firstNameModel);
  });
});
