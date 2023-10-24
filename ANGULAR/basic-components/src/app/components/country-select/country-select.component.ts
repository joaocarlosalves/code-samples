import { Component, EventEmitter, Input, Output, OnInit, HostListener } from '@angular/core';
import { countries } from './flags/countries'

@Component({
  selector: 'country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {
  activeBtn: number = 0;
  @Input() countriesList: any = [];
  @Output() getSelectedCountry = new EventEmitter();
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(event.key === 'Escape') {}
  }
  @HostListener('document:mousedown', ['$event']) clickout(event: any) {
    //if(!this.elem.nativeElement.contains(event.target)) {}
  }

  ngOnInit() {
    this.countriesList = countries;
    console.log(countries)
  }

  setActiveButton(index: number) {
    this.activeBtn = index;
    this.getSelectedCountry.emit();
  };
}
