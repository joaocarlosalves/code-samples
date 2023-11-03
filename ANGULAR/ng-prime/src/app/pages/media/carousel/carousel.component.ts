import { Component } from '@angular/core';
import { products, opts } from './carousel-data';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  products = products;

  responsiveOptions = opts;

  getSeverity(status: any): any {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
}
