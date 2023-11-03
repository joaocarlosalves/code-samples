import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { SliderRouterModule } from './slider-router';
import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    SliderModule,
    SliderRouterModule,
  ],
})
export class PSliderModule {}
