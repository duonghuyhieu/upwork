import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthComponent],
  imports: [CommonModule],
})
export class AuthModule {}
