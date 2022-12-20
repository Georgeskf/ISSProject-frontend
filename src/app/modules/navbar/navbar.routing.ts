import { NavbarComponent } from './navbar.component';
import { Route } from '@angular/router';
// import { AuthenticateGuard } from 'src/app/_guards/authenticate.guard';
export const NavBarRoutes: Route[] = [
    {
        path: '',
        component: NavbarComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../homepage/homepage.module').then((m) => m.HomepageModule),
                data: { breadcrumbs: 'Home' },
            },
            {
                path: 'books',
                loadChildren: () => import('../books/books.module').then((m) => m.BooksModule),
                data: { breadcrumbs: 'books' },
              },
        
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    }
];