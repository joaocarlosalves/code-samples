import { Component } from '@angular/core';

@Component({
  selector: 'p-tab-content',
  template: `
      <div class='p-tab-content'>
        <ng-content></ng-content>
      </div>
  `,
  styleUrls: ['./p-tabs.css']
})
export class PootaTabContentComponent {
  constructor() {}

  activeThisTab() {}
}
