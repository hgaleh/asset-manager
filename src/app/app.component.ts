import { Component } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public router: Router ) {}
  public selected = 'Inbox';
  public items: Array<any> = [
      { text: 'Basic', icon: 'k-i-inbox', selected: true, url: './basic' },
      { separator: true , url: ''},
      { text: 'Address', icon: 'k-i-bell', url: './address'},
      { text: 'Review', icon: 'k-i-calendar', url: './review' }
  ];

  public onSelect(ev: DrawerSelectEvent): void {
      this.router.navigate([ev.item.url]);
  }
}
