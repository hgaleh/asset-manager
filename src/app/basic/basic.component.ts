import { Component, OnInit } from '@angular/core';
import { ComboModel } from '../model/combo.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  listItems: Array<ComboModel>;
  date: string;
  numberbox: number;
  constructor(private service: UserService) {}
  
  ngOnInit(): void {
    this.listItems = this.service.getSex();
    this.numberbox = 100;
  }

  dataChange(e) {
    debugger;
  }

  onButtonClick() {
    alert('clicked');
  }
}
