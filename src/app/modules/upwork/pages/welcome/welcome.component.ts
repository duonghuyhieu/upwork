import { Component, OnInit } from '@angular/core';
import { skillEnum } from './../../interfaces/enum';
import {
  trendingSkills,
  topSkillsInUS,
  topSkills,
  projectCatalog,
} from './../../interfaces/skills';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public skillEnum = skillEnum;
  tags = Object.values(skillEnum);
  selectedTag: string = 'Top skills';
  topSkills: string[] = topSkills;
  trendingSkills: string[] = trendingSkills;
  topSkillsInUS: string[] = topSkillsInUS;
  projectCatalog: string[] = projectCatalog;
  arraySkill: string[] = topSkills;
  items1 = this.arraySkill.slice(0, this.arraySkill.length / 2);
  items2 = this.arraySkill.slice(this.arraySkill.length / 2);

  ngOnInit() {
    console.log(this.items1);
  }

  selectTag(tag: string) {
    this.selectedTag = tag;
    switch (this.selectedTag) {
      case skillEnum.topS:
        this.arraySkill = topSkills;
        break;
      case skillEnum.trendingS:
        this.arraySkill = trendingSkills;
        break;
      case skillEnum.topSinUS:
        this.arraySkill = topSkillsInUS;
        break;
      case skillEnum.projectCatalog:
        this.arraySkill = projectCatalog;
        break;
      default:
        this.arraySkill = topSkills;
        break;
    }
    this.items1 = this.arraySkill.slice(0, this.arraySkill.length / 2);
    this.items2 = this.arraySkill.slice(this.arraySkill.length / 2);
    console.log(this.items1);
    console.log(this.items2);
  }
}
