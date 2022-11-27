import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  constructor(public authenticateService: AuthenticateService, public router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authenticateService.isAuthenticated()) {
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }

}
