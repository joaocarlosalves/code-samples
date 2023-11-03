import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { TimelineRouterModule } from './timeline-router';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    TimelineModule,
    TimelineRouterModule,
  ],
})
export class PTimelineModule {}
