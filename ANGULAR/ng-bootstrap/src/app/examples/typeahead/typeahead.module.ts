import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { TypeaheadComponent } from './typeahead.component';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeaheadRouterModule } from './typeahead-router';

@NgModule({
  declarations: [TypeaheadComponent],
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe,
    NgbTypeaheadModule,
    TypeaheadRouterModule
  ],
  exports: [TypeaheadComponent, TypeaheadRouterModule],
})
export class TypeaheadModule { }
