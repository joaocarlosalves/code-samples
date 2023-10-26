import { Component, OnInit } from '@angular/core';
import { menu } from './../data/menu';

@Component({
  selector: 'examples',
  templateUrl: './examples.component.html'
})
export class ExamplesComponent implements OnInit {
  activeMenu: string = '';
  page: string = '';
  menu: string[] = menu;

  ngOnInit() {
    this.activeMenu = window.location.pathname;
    this.pageTitle();
  }

  pageTitle() { this.page = this.activeMenu.replace('/', '').toUpperCase() }

  changeMenu(menu: string) {
    setTimeout(() => this.pageTitle(), 10)
    this.activeMenu = menu;

  }
}
