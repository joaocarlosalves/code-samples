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
    this.activeMenu = this.getPage();
    this.list = Object.keys(this.pages);
  }

  getPage() { return window.location.pathname.split('/').splice(1)[1] }

  setTitle(event: any) { this.title = event.toUpperCase().replaceAll('-', ' ') }
}
