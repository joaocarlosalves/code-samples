import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RadioButtonRouterModule } from './radio-button-router';
import { RadioButtonComponent } from './radio-button.component';

@NgModule({
  declarations: [RadioButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    RadioButtonRouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PRadioButtonModule {}
