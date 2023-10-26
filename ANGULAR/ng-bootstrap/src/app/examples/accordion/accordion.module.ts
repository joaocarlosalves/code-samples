import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionRouterModule } from './accordion-router';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbAccordionModule,
    AccordionRouterModule
  ],
  exports: [AccordionComponent, AccordionRouterModule]
})
export class AccordionModule { }
