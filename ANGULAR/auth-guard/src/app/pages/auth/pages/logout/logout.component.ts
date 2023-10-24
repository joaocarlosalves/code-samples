import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((l) => console.log(l))
  }

  ngOnDestroy() {
    this.authService.isAuthenticated().subscribe().unsubscribe();
  }

  doLogout() {
    this.authService.logout();
  }
}
