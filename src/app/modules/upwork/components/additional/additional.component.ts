import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss'],
})
export class AdditionalComponent {
  @Input() itemId!: number;
}
