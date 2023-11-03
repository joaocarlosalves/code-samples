import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextRouterModule } from './input-text-router';
import { InputTextComponent } from './input-text.component';

@NgModule({
  declarations: [InputTextComponent],
  imports: [CommonModule, FormsModule, InputTextModule, InputTextRouterModule]
})
export class PInputTextModule {}
