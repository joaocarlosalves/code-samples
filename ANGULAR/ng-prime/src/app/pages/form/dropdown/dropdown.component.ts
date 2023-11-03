import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { City, cities } from 'data/cities';
import { groupedCities } from 'data/contries';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  cities = cities;
  selectedCity: City | string | undefined;
  selectedCity2: City | string | undefined;
  groupedCities: SelectItemGroup[] = groupedCities;
}
