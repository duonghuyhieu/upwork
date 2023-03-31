import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent {
  currentIndex = 0;

  onNextClick() {
    this.currentIndex = this.currentIndex + 1;
  }

  onPrevClick() {
    this.currentIndex = this.currentIndex - 1;
  }
}
