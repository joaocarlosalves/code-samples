import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { RatingRouterModule } from './rating-router';
import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, NgbRating, RatingRouterModule],
  exports: [RatingComponent, RatingRouterModule]
})
export class RatingModule { }
