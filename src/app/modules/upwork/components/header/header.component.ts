import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showNavHeader1: boolean = false;
  showNavHeader2: boolean = false;
  showNavHeader3: boolean = false;

  categories: string[] = [
    'Development & IT',
    'Design & Creative',
    'Sales & Marketing',
    'Writing & Translation',
    'Admin & Customer Support',
  ];

  types: string[] = ['Find Talent', 'Find Work', 'Why Upwork'];

  toggleHeader(index: number) {
    switch (index) {
      case 0:
        this.showNavHeader1 = !this.showNavHeader1;
        break;
      case 1:
        this.showNavHeader2 = !this.showNavHeader2;
        break;
      case 2:
        this.showNavHeader3 = !this.showNavHeader3;
        break;
      default:
        break;
    }
  }
}
