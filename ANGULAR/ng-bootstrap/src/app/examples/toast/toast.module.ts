import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastRouterModule } from './toast-router';
import { ToastComponent } from './toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, NgbToastModule, ToastRouterModule],
  exports: [ToastComponent, ToastRouterModule]
})
export class ToastModule { }
