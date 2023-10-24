import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  template: `
    <i *ngIf='v6 || !v4' class="icon fa fa-{{ regular ? 'regular' : 'solid' }} fa-{{ icon }}" [ngClass]="classList"></i>
    <i *ngIf='v4' class="icon fa-v4 fa-v4-{{ icon }}" [ngClass]="classList"></i>
  `,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  regular: boolean = false;
  solid: boolean = false;
  v4: boolean = false;
  v6: boolean = false;
  classList: string[] = [];
  @Input() icon: string = '';
  @Input() color: string = '';
  @Input() size: string = '';
  @Input('regular') set setRegular(r: boolean | '') { this.regular = r === '' || r };
  @Input('solid') set setSolid(s: boolean | '') { this.solid = s === '' || s };
  @Input('v4') set setV4(v: boolean | '') { this.v4 = v === '' || v };
  @Input('v6') set setV6(v: boolean | '') { this.v6 = v === '' || v };

  constructor() { this.setClassList() }

  setClassList() { this.classList.push(this.color != '' ? `color-${ this.color }` : '') }
}
