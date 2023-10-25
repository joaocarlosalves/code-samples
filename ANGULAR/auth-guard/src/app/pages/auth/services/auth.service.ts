import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    login() { window.localStorage.setItem('logged', 'true') }
    logout() { window.localStorage.setItem('logged', 'false') }
    isAuthenticated() { return window.localStorage.getItem('logged') }
}
