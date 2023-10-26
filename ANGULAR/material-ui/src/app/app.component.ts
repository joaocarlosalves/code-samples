import { Component } from '@angular/core';

export type Menu = {
  title: string;
  path: string;
  link: string;
};

@Component({
  selector: 'material-ui',
  template: `
    <main>
      <aside>
        <nav>
            <menu>
                <ul>
                    <li><a routerLink=""
                      (click)='changeMenu("home")'
                      [class.active]='"home" === activeMenu || "" === activeMenu'>Home</a>
                    </li>
                    <li *ngFor="let m of menu">
                      <a [routerLink]="m.path" (click)='changeMenu(m.path)'
                        [class.active]='m.path === activeMenu'>{{ m.title }}</a>
                    </li>
                </ul>
            </menu>
          </nav>
      </aside>

      <section class='main-content'><router-outlet></router-outlet></section>
    </main>
  `
})
export class AppComponent {
  title: string = 'material-ui';
  activeMenu: string = '';
  menu: Menu[] = [
    { title: 'autocomplete', path: 'autocomplete', link: 'autocomplete' },
    { title: 'buttons', path: 'buttons', link: 'button' },
    { title: 'badge', path: 'badge', link: 'badge' },
    { title: 'bottom sheet', path: 'bottom-sheet', link: 'bottom-sheet' },
    { title: 'button toggle', path: 'button-toggle', link: 'button-toggle' },
    { title: 'card', path: 'card', link: 'card' },
    { title: 'checkbox', path: 'checkbox', link: 'checkbox' },
    { title: 'chips', path: 'chips', link: 'chips' },
    { title: 'datepicker', path: 'datepicker', link: 'datepicker' },
    { title: 'dialog', path: 'dialog', link: 'dialog' },
    { title: 'divider', path: 'divider', link: 'divider' },
    { title: 'expansion panel', path: 'expansion-panel', link: 'expansion' },
    { title: 'form field', path: 'form-field', link: 'form-field' },
    { title: 'grid list', path: 'grid-list', link: 'grid-list' },
    { title: 'icon', path: 'icon', link: 'icon' },
    { title: 'inputs', path: 'inputs', link: 'input' },
    { title: 'list', path: 'list', link: 'list' },
    { title: 'menu', path: 'menu', link: 'menu' },
    { title: 'paginator', path: 'paginator', link: 'paginator' },
    { title: 'progress bar', path: 'progress-bar', link: 'progress-bar' },
    { title: 'progress spinner', path: 'spinner', link: 'progress-spinner' },
    { title: 'radio', path: 'radio', link: 'radio' },
    { title: 'ripple', path: 'ripple', link: 'ripple' },
    { title: 'select', path: 'select', link: 'select' },
    { title: 'sidenav', path: 'sidenav', link: 'sidenav' },
    { title: 'slider', path: 'slider', link: 'slider' },
    { title: 'snackbar', path: 'snackbar', link: 'snack-bar' },
    { title: 'sort header', path: 'sort-header', link: 'sort' },
    { title: 'stepper', path: 'stepper', link: 'stepper' },
    { title: 'table', path: 'table', link: 'table' },
    { title: 'tabs', path: 'tabs', link: 'tabs' },
    { title: 'toggle', path: 'toggle', link: 'slide-toggle' },
    { title: 'toolbar', path: 'toolbar', link: 'toolbar' },
    { title: 'tooltip', path: 'tooltip', link: 'tooltip' },
    { title: 'tree', path: 'tree', link: 'tree' }
  ];

  ngOnInit() { this.activeMenu = window.location.pathname }

  changeMenu(menu: string) { this.activeMenu = menu }
}
