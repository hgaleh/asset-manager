import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { AddressComponent } from './address/address.component';
import { ReviewComponent } from './review/review.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { NumericTextBoxModule, MaskedTextBoxModule } from '@progress/kendo-angular-inputs';
 import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DrawerModule } from '@progress/kendo-angular-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AddressComponent,
    ReviewComponent,
    NotFoundComponent,
    ErrorComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
