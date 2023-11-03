import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'ng-prime',
  template: `<layout></layout>`
})
export class AppComponent {
  title: string = '';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.primengConfig.zIndex = {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
    };
  }
}
