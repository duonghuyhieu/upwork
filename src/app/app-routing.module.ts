import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpworkComponent } from './modules/upwork/upwork.component';
import { AuthComponent } from './modules/auth/auth.component';
const routes: Routes = [
  { path: '', component: UpworkComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
