import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainHeaderModule } from './main-header/main-header.module';
import { MainContentModule } from './main-content/main-content.module';
import { MainFooterModule } from './main-footer/main-footer.module';

@Component({
  selector: 'layout',
  template: `
    <div space-between h-100>
      <main-header></main-header>
      <main-content h-max flex></main-content>
      <main-footer></main-footer>
    </div>
  `
})
export class LayoutComponent {}

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, MainHeaderModule, MainContentModule, MainFooterModule],
  exports: [LayoutComponent]
})
export class LayoutModule { }
