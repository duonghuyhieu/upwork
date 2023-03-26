import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categories : string[]= ['Development & IT','Design & Creative', 'Sales & Marketing', 'Writing & Translation','Admin & Customer Support']
}
