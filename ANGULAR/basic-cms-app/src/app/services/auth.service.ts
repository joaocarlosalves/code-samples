import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  doLogin(user: any, password: any) {
    const OPTIONS = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('user', user).set('password', password),
    };

    this.http
      .get('http://localhost:3000/users', OPTIONS)
      .subscribe((data: any) => {
        if (data.user === user && data.password === password) localStorage.setItem('isLogged', 'true')
        else localStorage.setItem('isLogged', 'false')
      });
  }

  async checkLogin() {
    let isLogged = await localStorage.getItem('isLogged')
    console.log('isLogged', isLogged)
    if(isLogged === 'true') return true;
    else return false;
  }
}
