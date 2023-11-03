import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './calendar.component';
import { CalendarRouterModule } from './calendar-router';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, FormsModule, CalendarModule, CalendarRouterModule]
})
export class PCalendarModule { }
