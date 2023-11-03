import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KeyFilterRouterModule } from './key-filter-router';
import { KeyFilterComponent } from './key-filter.component';

@NgModule({
  declarations: [KeyFilterComponent],
  imports: [CommonModule, FormsModule, KeyFilterModule, KeyFilterRouterModule],
})
export class PKeyFilterModule {}
