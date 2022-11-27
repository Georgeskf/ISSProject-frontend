import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthenticateGuard } from 'src/app/_guards/authenticate.guard';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../homepage/homepage.module').then((m) => m.HomepageModule),
        data: { breadcrumbs: 'Home' },
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
