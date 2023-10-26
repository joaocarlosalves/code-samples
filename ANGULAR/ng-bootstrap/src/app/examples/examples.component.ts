import { Component, OnInit } from '@angular/core';
import { menu } from './../data/menu';

@Component({
  selector: 'examples',
  templateUrl: './examples.component.html'
})
export class ExamplesComponent implements OnInit {
  activeMenu: string = '';
  menu: string[] = menu;

  ngOnInit() { this.activeMenu = window.location.pathname }

  changeMenu(menu: string) { this.activeMenu = menu }
}
