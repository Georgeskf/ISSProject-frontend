import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { NavBarRoutes } from './modules/navbar/navbar.routing';
import { RegisterComponent } from './modules/register/register.component';
import { LoginGuard } from './_guards/login.guard';
// import { LoginGuard } from './_guards/login.guard';

const routes: Routes = [
  ...NavBarRoutes,
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
     canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
