import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { ContentModule } from './content/content.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    ContentModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
