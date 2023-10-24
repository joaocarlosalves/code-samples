import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    public _logged$ = new Subject<boolean>()

    constructor() { }

    login() {
      this._logged$.next(true);
      return this._logged$.asObservable();
    }

    logout() {
      this._logged$.next(false);
      return this._logged$.asObservable();
    }

    isAuthenticated() {
      //this._logged$.next(true)
      return this._logged$.asObservable();
    }
}
