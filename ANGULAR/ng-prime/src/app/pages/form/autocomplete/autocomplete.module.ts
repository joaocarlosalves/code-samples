import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutocompleteRouterModule } from './autocomplete-router';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    AutocompleteRouterModule
  ],
  exports: [AutocompleteRouterModule]
})
export class AutocompleteModule { }
