import { Component } from '@angular/core';
import { items } from './context-menu-data';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
})
export class ContextMenuComponent {
  items: any = items;
}
