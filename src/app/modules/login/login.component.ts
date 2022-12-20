import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { AuthenticateService } from 'src/app/_guards/authenticate.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/_shared/models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  signinForm!: FormGroup;
  username!:string
  userlogin: User = new User();
  password!:string
  submitted = false;
  error: String = '';

  _unsubscriber$: Subject<any> = new Subject();
  isError = false;
  constructor(private _loginService: LoginService, private _authenticateService: AuthenticateService, private router: Router) {
  }
  ngOnDestroy() {
    this._unsubscriber$.next();
    this._unsubscriber$.complete();
  }
  signin() {
  }
  async login() {
    this.isError = false;
   this.submitted=true;
   
      if (!this.userlogin.Username.trim() && this.userlogin.password.trim()) {
        this.error = 'Email is required';
        console.log(99)
        this.isError = true;
        return;
      }
      if (this.userlogin.Username.trim() && !this.userlogin.password.trim()) {
        this.error = 'Password is required';
        this.isError = true;
        return;
      }
      if (!this.userlogin.Username.trim() && !this.userlogin.password.trim()) {
        this.error = 'Email and Password is required';
        this.isError = true;
        return;
      }
   console.log(1,this.userlogin)
   
    const t = await this._loginService.login(this.userlogin).toPromise();
    console.log(2,t.token)
    if (t) {
      await this._authenticateService.login(t.token.toString());
      this.router.navigate(['home']);
    } else {
      this.error = 'Wrong Email or Password';
      this.isError = true;
    }
  }
  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

}
