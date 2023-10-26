import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TimepickerRouterModule } from './timepicker-router';
import { TimepickerComponent } from './timepicker.component';

@NgModule({
  declarations: [TimepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe,
    NgbTimepickerModule,
    TimepickerRouterModule
  ],
  exports: [TimepickerComponent, TimepickerRouterModule]
})
export class TimepickerModule { }
