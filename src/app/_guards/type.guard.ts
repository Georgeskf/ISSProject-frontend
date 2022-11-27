import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class TypeGuard implements CanActivate {
  constructor(public authenticateService: AuthenticateService, public router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url = route.routeConfig?.path;
    let isValid: boolean = false;
    if (this.authenticateService.getType() == 'Admin') {
      isValid = true;
    } else {
      if (url == 'membershipmanagement' || url == 'meetingsmanagement' || url == 'doctorssupportdoctorsmanagement' || url == 'websitetexteditorsmanagement'
        || url == 'registredUser/:id' || url == 'uploadedVideo' || url == 'suggestionmanagement') {
        isValid = false;
      } else if ((url == 'abstractsubmissionmanagement' || url == 'newsmanagement') && !this.authenticateService.getInfo().iscommitte) {
        isValid = false;
      } else if (url == 'submitabstract/conflictofinterest') {
        isValid = false;
      }
      else {
        isValid = true;
      }
    }
    if (!isValid) {
      this.router.navigate(['/home']);
    }
    return isValid;
  }
}
