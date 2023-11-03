import { Component } from '@angular/core';
import { cols, products } from './table-data';

@Component({
  selector: 'ng-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  products;
  cols;

  constructor() {
    this.products = products;
    this.cols = cols;
  }
}
