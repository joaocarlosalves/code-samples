import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ThemePalette } from '@angular/material/core';

export interface Vegetable {
  name: string;
}
export interface Fruit {
  name: string;
}
export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  addOnBlur = true;
  fruits2: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
  formControl = new FormControl(['angular']);
  stateForm = this._formBuilder.group({ stateGroup: '' });
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  constructor(private _formBuilder: FormBuilder) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) this.keywords.splice(index, 1);
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) this.fruits.push(value);
    event.chipInput!.clear();
    this.fruitCtrl.setValue(null);
  }

  add2(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) this.keywords.push(value);
    event.chipInput!.clear();
  }

  add3(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) this.fruits2.push({name: value});
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits2.indexOf(fruit);
    if (index >= 0) this.fruits2.splice(index, 1);
  }

  remove2(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) this.fruits.splice(index, 1);
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(fruit);
      return;
    }
    const index = this.fruits2.indexOf(fruit);
    if (index > 0) this.fruits2[index].name = value;
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
