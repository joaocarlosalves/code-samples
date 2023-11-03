import { Component } from '@angular/core';
import { products } from './pick-list-data';

@Component({
  selector: 'pick-list',
  templateUrl: './pick-list.component.html'
})
export class PickListComponent {
  sourceProducts = products;
  targetProducts = products;
}
