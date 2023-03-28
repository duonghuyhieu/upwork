import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  tags = ['Top skills', 'Trending skills', 'Top skills in US', 'Project Catalog'];
  selectedTag !: string;

  selectTag(tag: string) {
    this.selectedTag = tag;
    console.log(tag)

  }
}
