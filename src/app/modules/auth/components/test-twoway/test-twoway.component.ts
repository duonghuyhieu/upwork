import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-twoway',
  templateUrl: './test-twoway.component.html',
  styleUrls: ['./test-twoway.component.scss'],
})
export class TestTwowayComponent {
  @Output() valueChange = new EventEmitter<string>();
}
