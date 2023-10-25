import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { this.authService.logout() }

  ngOnInit(): void { setTimeout(() => this.router.navigate(['/auth/login']), 10000) }
}
