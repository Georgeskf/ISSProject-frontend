import { Responses } from './../../_shared/models/responses';
import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configs, handleError } from 'src/app/_configs/configs';
import { User } from 'src/app/_shared/models/user';

export class body {
  message!: String;
  token!: String;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  login(t: any) {
    return this.http.post<any>(Configs.apiUrl + 'api/User/Login', t, this.httpOptions)
      .pipe(
        retry(1),
        catchError(handleError)
      )
  }
}
