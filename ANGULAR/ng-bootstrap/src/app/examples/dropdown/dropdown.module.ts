import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownRouterModule } from './dropdown-router';
import { DropdownComponent } from './dropdown.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, NgbDropdownModule, DropdownRouterModule],
  exports: [DropdownComponent, DropdownRouterModule]
})
export class DropdownModule { }
