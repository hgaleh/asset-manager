import { Component, OnInit } from '@angular/core';
import { ComboModel } from '../model/combo.model';
import { UserService } from '../service/user.service';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  listItems: Array<ComboModel>;
  date: string;
  numberbox: number;
  constructor(
    private service: UserService,
    private notificationService: NotificationService
  ) {}
  
  ngOnInit(): void {
    this.listItems = this.service.getSex();
    this.numberbox = 100;
  }

  dataChange(e) {
    debugger;
  }

  onButtonClick() {
    this.notificationService.show(
      {
        content: 'Success notification',
        hideAfter: 600,
        position: { horizontal: 'center', vertical: 'top' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'success', icon: true }
      }
    );
  }
}
