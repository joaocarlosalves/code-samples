import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectComponent } from './country-select.component';

@NgModule({
  declarations: [CountrySelectComponent],
  imports: [CommonModule],
  exports: [CountrySelectComponent]
})
export class CountrySelectModule { }
