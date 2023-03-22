import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WorkComponent } from './pages/work/work.component';
import { FreelanceJobsComponent } from './pages/freelance-jobs/freelance-jobs.component';
import { UpworkComponent } from './upwork.component';
@NgModule({
  declarations: [
    WelcomeComponent,
    WorkComponent,
    FreelanceJobsComponent,
    UpworkComponent,
  ],
  imports: [CommonModule],
})
export class UpworkModule {}
