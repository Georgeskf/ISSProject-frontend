import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/_guards/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authenticateService: AuthenticateService,private router: Router,) { }
  get isLogedIn() {
    return this._authenticateService.isAuthenticated();
  }
logout(){
  console.log("asas")
  this._authenticateService.logout();
  this.router.navigate(['Login']);
}
  ngOnInit(): void {
  }

}
