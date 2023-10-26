import { Component } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {
	model: any;
	date: any;

	constructor(private calendar: NgbCalendar) {}

	selectToday() { this.model = this.calendar.getToday()	}
}
