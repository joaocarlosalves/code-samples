import { Component } from '@angular/core';
import { products } from './order-list-data';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  products = products;
}
