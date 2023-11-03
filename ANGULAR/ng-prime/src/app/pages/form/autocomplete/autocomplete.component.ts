import { Component } from '@angular/core';
import { countries, groupedCities } from 'data/contries';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html'
})
export class AutocompleteComponent {
  items: any;
  selectedItem: any;
  suggestions: any;
  countries = countries;
  selectedCountry: any;
  filteredCountries: any;
  selectedCountryAdvanced: any;
  groupedCities: any;

  ngOnInit(): void {
    this.groupedCities = groupedCities;
    this.items = [];
    for (let i = 0; i < 10000; i++) {
        this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
  }

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(
      (item) => event.query + '-' + item
    );
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
        let country = (this.countries as any[])[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }

    this.filteredCountries = filtered;
}
}
