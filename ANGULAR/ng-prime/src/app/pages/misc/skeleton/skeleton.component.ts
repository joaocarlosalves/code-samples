import { Component } from '@angular/core';

@Component({
  selector: 'skeleton',
  templateUrl: './skeleton.component.html'
})
export class SkeletonComponent {
  products: any;

  ngOnInit() {
      this.products = Array.from({ length: 5 }).map((_, i) => `Item #${i}`);
  }
}
