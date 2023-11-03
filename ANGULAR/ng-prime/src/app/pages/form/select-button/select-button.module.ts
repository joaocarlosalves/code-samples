import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectButtonRouterModule } from './select-button-router';
import { SelectButtonComponent } from './select-button.component';

@NgModule({
  declarations: [SelectButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    SelectButtonRouterModule,
  ],
})
export class PSelectButtonModule {}
