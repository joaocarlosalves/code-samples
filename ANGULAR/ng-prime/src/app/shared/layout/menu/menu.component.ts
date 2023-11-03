import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { menu } from 'data/menu';
import { getPage } from '../layout-utils';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  activeMenu: string = '';
  page: string = '';
  pages: any = menu;
  list: string[] = [];
  @Output() getTitle = new EventEmitter();

  ngOnInit() {
    this.activeMenu = getPage();
    this.list = Object.keys(this.pages);
  }

  changeMenu(menu: string) {
    this.activeMenu = menu;
    this.getTitle.emit(menu);
  }
}
