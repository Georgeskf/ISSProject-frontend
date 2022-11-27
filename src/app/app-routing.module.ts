import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarRoutes } from './modules/navbar/navbar.routing';

const routes: Routes = [
  ...NavBarRoutes,
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
