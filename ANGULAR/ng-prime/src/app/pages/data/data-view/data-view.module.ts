import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { DataViewRouterModule } from './data-view-router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DataViewComponent } from './data-view.component';

@NgModule({
  declarations: [DataViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TagModule,
    RatingModule,
    ButtonModule,
    DataViewModule,
    DataViewRouterModule,
  ],
})
export class PDataViewModule {}
