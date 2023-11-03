import { Component } from '@angular/core';
import { images, opts, pos } from './galleria-data';

@Component({
  selector: 'galleria',
  templateUrl: './galleria.component.html'
})
export class GalleriaComponent {
  images: any = images;
  responsiveOptions: any[] = opts;
  position: string = 'bottom';
  positionOptions = pos;
}
