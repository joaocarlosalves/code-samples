import { Component } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  value: number = 42;
  rangeValues: number[] = [20, 80];
  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];
}
