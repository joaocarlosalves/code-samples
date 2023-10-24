import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouterModule } from './auth-router';
import { LogoutModule } from './pages/logout/logout.module';
import { LoginModule } from './pages/login/login.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [CommonModule, LoginModule, LogoutModule, AuthRouterModule],
  exports: [LoginModule, LogoutModule, AuthRouterModule],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
