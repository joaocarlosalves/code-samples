import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { FormControl } from '@angular/forms';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  asyncTabs: Observable<ExampleTab[]>;
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');
    if (selectAfterAdding) this.selected.setValue(this.tabs.length - 1)
  }

  removeTab(index: number) { this.tabs.splice(index, 1) }
}
