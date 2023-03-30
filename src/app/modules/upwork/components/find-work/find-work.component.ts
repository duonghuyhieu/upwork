import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-work',
  templateUrl: './find-work.component.html',
  styleUrls: ['./find-work.component.scss'],
})
export class FindWorkComponent {
  constructor(private router: Router) {}
  goTo(link: string) {
    this.router.navigate(['/upwork/' + link]);
  }
}
