import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelectRouterModule } from './multi-select-router';
import { MultiSelectComponent } from './multi-select.component';

@NgModule({
  declarations: [MultiSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    MultiSelectModule,
    MultiSelectRouterModule,
  ],
})
export class PMultiSelectModule {}
