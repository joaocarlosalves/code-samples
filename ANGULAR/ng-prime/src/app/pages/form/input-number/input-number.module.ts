import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputNumberRouterModule } from './input-number-router';
import { InputNumberComponent } from './input-number.component';

@NgModule({
  declarations: [InputNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    InputNumberRouterModule,
  ],
})
export class PInputNumberModule {}
