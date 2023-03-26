import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WorkComponent } from './pages/work/work.component';
import { FreelanceJobsComponent } from './pages/freelance-jobs/freelance-jobs.component';
import { UpworkComponent } from './upwork.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'freelance-jobs', component: FreelanceJobsComponent },
];

@NgModule({
  declarations: [
    WelcomeComponent,
    WorkComponent,
    FreelanceJobsComponent,
    UpworkComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

  ],
})
export class UpworkModule {}
