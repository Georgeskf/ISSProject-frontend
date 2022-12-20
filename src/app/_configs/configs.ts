import { throwError } from 'rxjs';
export class Configs {
    private static APIURL = 'https://localhost:7045/';
    private static TOKEN_KEY = 'auth-token';
    public static isLoading: Boolean = false;
    public static get apiUrl() {
        return this.APIURL;
    }
    public static get tokenKey() {
        return this.TOKEN_KEY;
    }
    public static get getToken(): String {
        return localStorage.getItem(Configs.tokenKey) || '';
    }
    public static get getNumber(): any {
        return localStorage.getItem('NbNotif') || 0;
    }
}

export function handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
}