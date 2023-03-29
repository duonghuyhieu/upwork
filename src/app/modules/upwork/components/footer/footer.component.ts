import {
  forClients,
  forTalent,
  resources,
  company,
} from './../../interfaces/footer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  forClients: string[] = forClients;
  forTalent: string[] = forTalent;
  resources: string[] = resources;
  company: string[] = company;
}
