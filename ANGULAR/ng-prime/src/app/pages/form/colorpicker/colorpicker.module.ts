import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ColorpickerComponent } from './colorpicker.component';
import { ColorpickerRouterModule } from './colorpicker-router';

@NgModule({
  declarations: [ColorpickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    ColorpickerRouterModule,
  ],
})
export class ColorpickerModule {}
