import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public authenticateService: AuthenticateService, public router: Router) {

  }
  canActivate(): boolean {
    if (this.authenticateService.isAuthenticated()) {
      this.router.navigate(['main']);
      return false;
    }
    return true;
  }

}
