
import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configs, handleError } from 'src/app/_configs/configs';
import { User } from 'src/app/_shared/models/user';
import { ArrayResponses, Responses } from 'src/app/_shared/models/responses';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    constructor(private http: HttpClient) { }

    allUsers(): Observable<ArrayResponses<User>> {
        return this.http.get<ArrayResponses<User>>(Configs.apiUrl + 'users/allUsers', this.httpOptions)
            .pipe(
                retry(1),
                catchError(handleError)
            )
    }

   

    register(t: User): Observable<Responses<User>> {
        return this.http.post<Responses<User>>(Configs.apiUrl + 'api/User/Register', JSON.stringify(t), this.httpOptions)
            .pipe(
                retry(1),
                catchError(handleError)
            )
    }

    updateUser(t: User): Observable<Responses<User>> {
        return this.http.patch<Responses<User>>(Configs.apiUrl + 'users/updateUser', JSON.stringify(t), this.httpOptions)
            .pipe(
                retry(1),
                catchError(handleError)
            )
    }

   
    deleteUser(t: User): Observable<Responses<any>> {
        return this.http.delete<Responses<any>>(Configs.apiUrl + 'users/' + t.Username + 'deleteUser', this.httpOptions)
            .pipe(
                retry(1),
                catchError(handleError)
            )
    }


}
