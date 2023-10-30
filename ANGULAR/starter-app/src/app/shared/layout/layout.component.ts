import { Component } from '@angular/core';
import { menu } from 'data/menu';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  activeMenu: string = '';
  page: string = '';
  pages: any = menu;
  list: string[] = [];

  ngOnInit() {
    this.activeMenu = this.getPage();
    //this.pageTitle();
    this.list = Object.keys(this.pages);
  }

  changeMenu(menu: string) {
    setTimeout(() => this.pageTitle(), 10)
    this.activeMenu = menu;
  }

  getPage() { return window.location.pathname.split('/').splice(1)[1] }

  pageTitle() { this.page = this.getPage().toUpperCase() }
}
