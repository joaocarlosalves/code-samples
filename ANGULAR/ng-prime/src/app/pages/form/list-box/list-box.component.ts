import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { countries, groupedCities } from 'data/contries';
import { City, cities } from 'data/cities';
import { Country } from './list-box-data';

@Component({
  selector: 'list-box',
  templateUrl: './list-box.component.html'
})
export class ListBoxComponent implements OnInit {
  cities!: City[];
  selectedCity!: City;
  selectedCities!: City[];
  countries!: Country[];
  selectedCountry!: Country;
  groupedCities!: SelectItemGroup[];

  ngOnInit(): void {
    this.cities = cities;
    this.countries = countries;
    this.groupedCities = groupedCities;
  }
}
