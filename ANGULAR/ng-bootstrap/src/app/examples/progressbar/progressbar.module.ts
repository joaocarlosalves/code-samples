import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarRouterModule } from './progressbar-router';
import { ProgressbarComponent } from './progressbar.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProgressbarComponent],
  imports: [CommonModule, NgbProgressbarModule, ProgressbarRouterModule],
  exports: [ProgressbarComponent, ProgressbarRouterModule]
})
export class ProgressbarModule { }
