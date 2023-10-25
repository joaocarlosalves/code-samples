import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaIconModule } from '../icons/p-icon-module';
import { PootaAccordionComponent } from './p-accordion.component';

@NgModule({
  declarations: [PootaAccordionComponent],
  imports: [CommonModule, PootaIconModule],
  exports: [PootaAccordionComponent]
})
export class PootaAccordionModule { }
