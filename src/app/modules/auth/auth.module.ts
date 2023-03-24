import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
})
export class AuthModule {}
