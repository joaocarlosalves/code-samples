import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((l) => console.log(l))
  }

  ngOnDestroy() {
    this.authService.isAuthenticated().subscribe().unsubscribe();
  }
}
