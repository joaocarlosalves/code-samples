import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollTopRouterModule } from './scroll-top-router';
import { ScrollTopComponent } from './scroll-top.component';

@NgModule({
  declarations: [ScrollTopComponent],
  imports: [CommonModule, ScrollTopModule, ScrollTopRouterModule]
})
export class PScrollTopModule { }
