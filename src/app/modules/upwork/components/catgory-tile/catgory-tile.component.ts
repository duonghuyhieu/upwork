import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catgory-tile',
  templateUrl: './catgory-tile.component.html',
  styleUrls: ['./catgory-tile.component.scss']
})
export class CatgoryTileComponent {
 @Input() title !: string;
 @Input() rate !: number;
 @Input() skill !: number;
}
