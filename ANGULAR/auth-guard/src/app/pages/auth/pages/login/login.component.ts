import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((l) => console.log(l))
  }

  ngOnDestroy() {
    this.authService.isAuthenticated().subscribe().unsubscribe();
  }

  doLogin() {
    this.authService.login();
  }
}
