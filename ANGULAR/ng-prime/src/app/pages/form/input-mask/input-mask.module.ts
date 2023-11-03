import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputMaskRouterModule } from './input-mask-router';
import { InputMaskComponent } from './input-mask.component';

@NgModule({
  declarations: [InputMaskComponent],
  imports: [CommonModule, FormsModule, InputMaskModule, InputMaskRouterModule]
})
export class PInputMaskModule {}
