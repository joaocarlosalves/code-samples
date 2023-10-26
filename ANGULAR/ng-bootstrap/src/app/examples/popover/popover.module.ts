import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverRouterModule } from './popover-router';
import { PopoverComponent } from './popover.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PopoverComponent],
  imports: [CommonModule, NgbPopoverModule, PopoverRouterModule],
  exports: [PopoverComponent, PopoverRouterModule]
})
export class PopoverModule { }
