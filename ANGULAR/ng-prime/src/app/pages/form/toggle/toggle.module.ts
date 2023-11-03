import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleRouterModule } from './toggle-router';
import { ToggleComponent } from './toggle.component';

@NgModule({
  declarations: [ToggleComponent],
  imports: [CommonModule, FormsModule, ToggleButtonModule, ToggleRouterModule],
})
export class PToggleModule {}
