import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouterModule } from 'app/app-router';
import { MainContentComponent } from './main-content.component';

@NgModule({
  declarations: [MainContentComponent],
  imports: [CommonModule, AppRouterModule],
  exports: [MainContentComponent, AppRouterModule]
})
export class MainContentModule { }
