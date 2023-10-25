import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-tabs-header',
  template: `
      <ul class='p-tab-header' [ngClass]="setClassList()">
        <ng-content></ng-content>
      <ul>
  `,
  styleUrls: ['./p-tabs.css']
})
export class PootaTabsHeaderComponent {
  noBorder: boolean = false;
  center: boolean = false;
  right: boolean = false;
  left: boolean = false;
  classList: any = [];
  @Input() active: boolean = false;
  @Input('no-border') set setNoBorder(noBorder: boolean | '') { this.noBorder = noBorder === '' || noBorder }
  @Input('center') set setCenter(center: boolean | '') { this.center = center === '' || center }
  @Input('right') set setRight(right: boolean | '') { this.right = right === '' || right }
  @Input('left') set setLeft(left: boolean | '') { this.left = left === '' || left }

  constructor() {}

  setClassList() {
    if(this.noBorder) this.classList.push('no-border');
    if(this.center) this.classList.push('tab-center');
    if(this.right) this.classList.push('tab-right');
    if(this.left) this.classList.push('tab-left');

    return this.classList;
  }
}
