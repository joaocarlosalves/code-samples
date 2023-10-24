import { Component, Input } from '@angular/core';

@Component({
  selector: 'flag',
  template: `<i class="flag flag-{{ flag | lowercase }} {{ size }}"></i>`,
  styleUrls: ['./flag.scss']
})
export class FlagComponent {
  @Input() flag: string = '';
  @Input() size: string = '';
}
