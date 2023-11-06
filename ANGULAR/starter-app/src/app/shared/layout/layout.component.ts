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
  title: string = '';

  ngOnInit() {
    this.getPage();
    this.setList();
  }

  setList() { this.list = Object.keys(this.pages) }

  getPage() { this.activeMenu = window.location.pathname.split('/').splice(1)[1] }

  setTitle(event: any) { this.title = event.replaceAll('-', ' ') }
}
