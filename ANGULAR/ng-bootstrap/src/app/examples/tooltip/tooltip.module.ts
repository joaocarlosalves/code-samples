import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipRouterModule } from './tooltip-router';
import { TooltipComponent } from './tooltip.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, NgbTooltipModule, TooltipRouterModule],
  exports: [TooltipComponent, TooltipRouterModule],
})
export class TooltipModule { }
