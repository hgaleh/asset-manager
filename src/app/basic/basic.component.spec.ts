import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';
import { UserService } from '../service/user.service';

xdescribe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;
  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    TestBed.configureTestingModule({
      declarations: [ BasicComponent ],
      providers: [
        { provide: UserService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
