import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRouterModule } from './error-router';
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, ErrorRouterModule],
  exports: [ErrorComponent, ErrorRouterModule]
})
export class ErrorModule { }
