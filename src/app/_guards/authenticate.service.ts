import { Configs } from './../_configs/configs';
import { Injectable } from '@angular/core';
// import { User } from '../_shared/models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {

    constructor() { }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem(Configs.tokenKey);
        if (token && token.length > 0) {
            let payLoad = atob(token.split('.')[1]);
            return JSON.parse(payLoad).exp > Date.now() / 1000;
        } else {
            return false;
        }
    }

    public getType(): String | undefined {
        const token = localStorage.getItem(Configs.tokenKey);
        if (token && token.length > 0) {
            let payLoad = atob(token.split('.')[1]);
            return JSON.parse(atob(token.split('.')[1])).adminType;
        } else {
            return undefined;
        }
    }

    public checkToken(): boolean {
        const userData = localStorage.getItem(Configs.tokenKey);
        if (userData && userData.length > 0) {
            return true;
        } else {
            return false;
        }
    }


    public getInfo(): any {
        const token = localStorage.getItem(Configs.tokenKey);
        if (token) {
            return JSON.parse(atob(token.split('.')[1]));
        } else {
            return '';
        }
    }

    public async login(token: string) {
        await window.localStorage.removeItem(Configs.tokenKey);
        await window.localStorage.setItem(Configs.tokenKey, token);
        return true;
    }

    public async logout() {
        await localStorage.removeItem(Configs.tokenKey);
        await localStorage.clear();
        return true;
    }
}