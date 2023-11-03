import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CarouselRouterModule } from './carousel-router';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TagModule,
    CarouselModule,
    CarouselRouterModule,
  ],
})
export class PCarouselModule {}
