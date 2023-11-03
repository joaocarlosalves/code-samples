import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import { ChipsRouterModule } from './chips-router';
import { ChipsComponent } from './chips.component';

@NgModule({
  declarations: [ChipsComponent],
  imports: [CommonModule, FormsModule, ChipsModule, ChipsRouterModule],
})
export class PChipsModule {}
