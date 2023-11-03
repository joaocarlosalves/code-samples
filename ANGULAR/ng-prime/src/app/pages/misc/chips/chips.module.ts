import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import { ChipModule } from 'primeng/chip';
import { ChipsComponent } from './chips.component';
import { ChipsRouterModule } from './chips-router';

@NgModule({
  declarations: [ChipsComponent],
  imports: [CommonModule, ChipsModule, ChipModule, ChipsRouterModule]
})
export class PChipsModule { }
