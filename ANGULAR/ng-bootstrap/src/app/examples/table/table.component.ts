import { Component } from '@angular/core';
import { COUNTRIES } from './table-data';

@Component({
  selector: 'ngb-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  countries = COUNTRIES;
}
