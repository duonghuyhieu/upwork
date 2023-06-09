import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.scss'],
})
export class TestPipeComponent {
  C!: number;
  F!: number;

  myValue: string = '';

  onValueChange(newValue: string) {
    this.myValue = newValue;
  }
}
