import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  doLogin() {
    this.authService.login();
    setTimeout(() => this.router.navigate(['/']), 100);
  }
}
