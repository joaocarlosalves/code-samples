import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/pages/auth/services/auth.service';

@Component({
  selector: 'main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  logged: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit() { setInterval(() => this.checkLogged(), 100) }

  checkLogged() { this.logged = this.authService.isAuthenticated() == 'false' ? false : true }
}
