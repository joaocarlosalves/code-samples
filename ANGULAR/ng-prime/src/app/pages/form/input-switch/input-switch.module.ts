import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputSwitchRouterModule } from './input-switch-router';
import { InputSwitchComponent } from './input-switch.component';

@NgModule({
  declarations: [InputSwitchComponent],
  imports: [CommonModule, FormsModule, InputSwitchModule, InputSwitchRouterModule]
})
export class PInputSwitchModule { }
