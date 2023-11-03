import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { PAccordionRouterModule } from './accordion-router';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, FormsModule, AccordionModule, PAccordionRouterModule]
})
export class PAccordionModule {}
