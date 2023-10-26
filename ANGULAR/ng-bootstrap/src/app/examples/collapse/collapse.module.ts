import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseRouterModule } from './collapse-router';
import { CollapseComponent } from './collapse.component';

@NgModule({
  declarations: [CollapseComponent],
  imports: [CommonModule, NgbCollapseModule, CollapseRouterModule],
  exports: [CollapseComponent, CollapseRouterModule]
})
export class CollapseModule { }
