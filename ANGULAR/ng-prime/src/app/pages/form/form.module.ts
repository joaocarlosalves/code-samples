import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRouterModule } from './form-router';

@NgModule({
  imports: [CommonModule, FormRouterModule],
  exports: [FormRouterModule]
})
export class FormModule {}
