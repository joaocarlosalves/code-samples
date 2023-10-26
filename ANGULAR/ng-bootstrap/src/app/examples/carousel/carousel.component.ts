import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images: string[] = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  showNavigationArrows = false;
	showNavigationIndicators = false;
	images2 = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
