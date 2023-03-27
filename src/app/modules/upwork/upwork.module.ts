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
import { FindTalentComponent } from './components/find-talent/find-talent.component';
import { FindWorkComponent } from './components/find-work/find-work.component';
import { WhyUpworkComponent } from './components/why-upwork/why-upwork.component';
import { CatgoryTileComponent } from './components/catgory-tile/catgory-tile.component';

const routes: Routes = [
  {
    path: '',
    component: UpworkComponent,
    children: [
      { path: 'work', component: WorkComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'freelance-jobs', component: FreelanceJobsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    WelcomeComponent,
    WorkComponent,
    FreelanceJobsComponent,
    UpworkComponent,
    HeaderComponent,
    FooterComponent,
    FindTalentComponent,
    FindWorkComponent,
    WhyUpworkComponent,
    CatgoryTileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [RouterModule],
})
export class UpworkModule {}
