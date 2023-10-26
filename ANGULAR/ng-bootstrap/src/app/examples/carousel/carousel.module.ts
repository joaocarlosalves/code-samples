import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselRouterModule } from './carousel-router';
import { NgbCarousel, NgbCarouselConfig, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, NgbCarousel, NgbSlide, CarouselRouterModule],
  exports: [CarouselComponent, CarouselRouterModule],
  providers: [NgbCarouselConfig]
})
export class CarouselModule { }
