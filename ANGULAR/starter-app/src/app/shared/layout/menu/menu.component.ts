import { Component, EventEmitter, Input, Output } from '@angular/core';
import { menu } from 'data/menu';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent   {
  tree: boolean = false;
  page: string = '';
  pages: any = menu;
  activeMenu: string = menu[0];
  list: any = this.tree ? Object.keys(this.pages) : this.pages;
  @Input('tree') set setTree(t: boolean | '') { this.tree = t === '' || t }
  @Output() getTitle = new EventEmitter();

  changeMenu(menu: string) {
    this.activeMenu = menu;
    this.getTitle.emit(menu);
  }
}
