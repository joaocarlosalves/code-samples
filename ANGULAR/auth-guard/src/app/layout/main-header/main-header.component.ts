import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/pages/auth/services/auth.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  logged: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit() { setInterval(() => this.checkLogged(), 100) }

  checkLogged() { this.logged = this.authService.isAuthenticated() == 'false' ? false : true }
}
