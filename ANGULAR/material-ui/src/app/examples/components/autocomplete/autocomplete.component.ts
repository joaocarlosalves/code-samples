import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  myControl = new FormControl('');
  control = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;
  filteredOptions: Observable<string[]>;
  stateForm = this._formBuilder.group({ stateGroup: '' });
  stateGroupOptions: Observable<StateGroup[]>;
  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );

    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || ''))
    );

    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value || ''))
    );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
