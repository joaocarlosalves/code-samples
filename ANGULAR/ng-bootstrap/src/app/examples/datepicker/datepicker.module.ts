import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerRouterModule } from './datepicker-router';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    JsonPipe,
    DatepickerRouterModule
  ],
  exports: [DatepickerComponent, DatepickerRouterModule]
})
export class DatepickerModule { }
