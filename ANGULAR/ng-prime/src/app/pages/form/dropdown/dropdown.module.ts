import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './dropdown.component';
import { DropdownRouterModule } from './dropdown-router';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, FormsModule, DropdownModule, DropdownRouterModule],
})
export class PDropdownModule {}
