import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertRouterModule } from './alert-router';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    AlertRouterModule,
    NgbAlertModule
  ],
  exports: [AlertComponent, AlertRouterModule]
})
export class AlertModule { }
