import { Component } from '@angular/core';

@Component({
  selector: 'colorpicker',
  templateUrl: './colorpicker.component.html'
})
export class ColorpickerComponent {
  color: string = '#6466f1';
  colorRGB: any = { r: 100, g: 102, b: 241 };
  colorHSB: any = { h: 239, s: 59, b: 95 };
}
