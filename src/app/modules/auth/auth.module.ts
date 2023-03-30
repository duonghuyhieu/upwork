import { TestPipeComponent } from './pages/test-pipe/test-pipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AdminComponent } from './pages/admin/admin.component';
import { TestTwowayComponent } from './components/test-twoway/test-twoway.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
      { path: 'test', component: TestPipeComponent },
      { path: 'admin', component: AdminComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    TestPipeComponent,
    AdminComponent,
    TestTwowayComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AuthModule {}
