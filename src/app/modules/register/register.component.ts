import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/login/users/users.service';
import { User } from 'src/app/_shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signinForm!: FormGroup;
  username!:string
  password!:string
  submitted!: Boolean;
  userlogin: User = new User();

  constructor(private _UserService: UserService,private router: Router) { }

  async register() {
    this.submitted = true;
    if (this.userlogin.Username.trim() && this.userlogin.password.trim()) {
        console.log("jajajaj")
          const t = await this._UserService.register(this.userlogin).toPromise();
          
          this.router.navigate(['login']);
        

      
    } else {
      return;
    }

  }
  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

}
