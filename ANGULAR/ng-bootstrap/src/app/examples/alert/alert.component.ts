import { Component } from '@angular/core';
import { ALERTS, Alert } from './alert-data';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
	alerts: Alert[] = [];

	constructor() { this.reset() }

	close(alert: Alert) { this.alerts.splice(this.alerts.indexOf(alert), 1)	}

	reset() {	this.alerts = Array.from(ALERTS) }
}
