import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  earns = [
    { id: 1, name: 'Talent Marketplace' },
    { id: 2, name: 'Project Catalog' },
    { id: 3, name: 'Talent Scount' },
  ];

  selectedItem: number = 1;

  onClick(earnId: number) {
    this.selectedItem = earnId;
  }
}
