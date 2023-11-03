import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { countries, groupedCities } from 'data/contries';
import { City, cities } from 'data/cities';
import { Country } from './multi-select-data';

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html'
})
export class MultiSelectComponent  implements OnInit {
  cities!: City[];
  selectedCity!: City;
  selectedCities!: City[];
  countries!: Country[];
  selectedCountry!: Country;
  selectedCountries!: Country[];
  groupedCities!: SelectItemGroup[];

  ngOnInit(): void {
    this.cities = cities;
    this.countries = countries;
    this.groupedCities = groupedCities;
  }
}
