import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRouterModule } from './about-router';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRouterModule],
  exports: [AboutComponent]
})
export class AboutModule { }
