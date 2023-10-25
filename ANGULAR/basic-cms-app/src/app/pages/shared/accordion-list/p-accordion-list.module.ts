import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaIconModule } from '../../icons/p-icon-module';
import { PootaAccordionListComponent } from './p-accordion-list.component';
import { PootaAccordionListItemComponent } from './p-accordion-list-item.component';

@NgModule({
  declarations: [PootaAccordionListComponent, PootaAccordionListItemComponent],
  imports: [CommonModule, PootaIconModule],
  exports: [PootaAccordionListComponent, PootaAccordionListItemComponent]
})
export class PootaAccordionListModule { }
