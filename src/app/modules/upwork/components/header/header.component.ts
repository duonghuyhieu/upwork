import { WhyUpworkComponent } from './../why-upwork/why-upwork.component';
import { FindWorkComponent } from './../find-work/find-work.component';
import { FindTalentComponent } from './../find-talent/find-talent.component';
import { Type } from './../../interfaces/type';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  categories: string[] = [
    'Development & IT',
    'Design & Creative',
    'Sales & Marketing',
    'Writing & Translation',
    'Admin & Customer Support',
  ];

  types: Type[] = [
    { id: 1, name: 'Find Talent', active: false },
    { id: 2, name: 'Find Work', active: false },
    { id: 3, name: 'Why Upwork', active: false },
  ];

  components = [
    { id: 1, component: FindTalentComponent },
    { id: 2, component: FindWorkComponent },
    { id: 3, component: WhyUpworkComponent },
  ];

  goToAuth(link: string) {
    this.router.navigate(['/auth/' + link]);
  }

  onTagHover(type: Type) {
    this.types.forEach((t) => (t.active = false));
    type.active = true;
  }

  onTagLeave(type: Type) {
    type.active = false;
  }

  getComponent(id: number) {
    const componentData = this.components.find((c) => c.id === id);
    return componentData ? componentData.component : null;
  }

  goTo(link: string) {
    this.router.navigate(['/upwork/' + link]);
  }
}
