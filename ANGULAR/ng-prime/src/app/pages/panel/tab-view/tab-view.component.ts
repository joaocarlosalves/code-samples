import { Component } from '@angular/core';

@Component({
  selector: 'tab-view',
  templateUrl: './tab-view.component.html',
})
export class TabViewComponent {
  activeIndex: number = 0;
  activeIndex1: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({
    title: 'Title',
    content: 'Content',
  }));
}
