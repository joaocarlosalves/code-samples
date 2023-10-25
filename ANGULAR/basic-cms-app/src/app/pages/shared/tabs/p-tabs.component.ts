import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-tabs',
  template: `
        <div class="p-tabs">
          <ng-content></ng-content>
        </div>
  `,
  styleUrls: ['./p-tabs.css']
})
export class PootaTabsComponent {
  constructor() {}
}
