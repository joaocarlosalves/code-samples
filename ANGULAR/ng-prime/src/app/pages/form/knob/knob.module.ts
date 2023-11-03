import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { KnobRouterModule } from './knob-router';
import { KnobComponent } from './knob.component';

@NgModule({
  declarations: [KnobComponent],
  imports: [CommonModule, FormsModule, KnobModule, KnobRouterModule]
})
export class PKnobModule { }
