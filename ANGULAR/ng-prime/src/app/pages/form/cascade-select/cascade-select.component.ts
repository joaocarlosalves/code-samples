import { Component } from '@angular/core';
import { countries } from './countries-data';

@Component({
  selector: 'cascade-select',
  templateUrl: './cascade-select.component.html',
  styleUrls: ['./cascade-select.component.scss']
})
export class CascadeSelectComponent {
  countries: any = countries;
  selectedCity: any;
}
