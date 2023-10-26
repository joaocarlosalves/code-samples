import { Component } from '@angular/core';

@Component({
  selector: 'timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent {
  time = { hour: 13, minute: 30 };
}
