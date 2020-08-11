import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BasicComponent } from './basic/basic.component';
import { ReviewComponent } from './review/review.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  { path: '',   redirectTo: '/basic', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
