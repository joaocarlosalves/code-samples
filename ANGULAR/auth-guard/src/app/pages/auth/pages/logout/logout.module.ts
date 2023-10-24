import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { LogoutRouterModule } from './logout-router';

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, LogoutRouterModule],
  exports: [LogoutComponent, LogoutRouterModule]
})
export class LogoutModule { }
