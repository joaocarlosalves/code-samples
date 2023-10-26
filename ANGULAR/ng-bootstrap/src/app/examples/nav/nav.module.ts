import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavRouterModule } from './nav-router';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, NgbNavModule, NavRouterModule],
  exports: [NavComponent, NavRouterModule]
})
export class NavModule { }
