import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextareaRouterModule } from './input-textarea-router';
import { InputTextareaComponent } from './input-textarea.component';

@NgModule({
  declarations: [InputTextareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextareaModule,
    InputTextareaRouterModule,
  ],
})
export class PInputTextareaModule {}
