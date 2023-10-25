import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='main-container'>
      <header class='main-header'></header>

      <section class="main-content">
        <div class='main-menu'>
          <aside class='menu'>
            <nav>
              <ul>
                <li class="mb5px" *ngFor='let page of pages'>
                    <a [routerLink]="page.path" (click)='activeMenu = page.path' [class.active]='page.path === activeMenu'>{{ page.text }}</a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>

        <div class='content-container'>
          <router-outlet></router-outlet>
        </div>
      </section>
    </div>
  `
})

export class AppComponent {
  activeMenu: any;

  pages: any = [
    { path: '/arrays-objects', text: 'Arrays / Objects' },
    { path: '/base64', text: 'Image to Base64' },
    { path: '/crud', text: 'Crud' },
    { path: '/dates', text: 'Dates' },
    { path: '/form', text: 'Reactive Form' },
    { path: '/rxjs', text: 'RXJS Operators' }
  ]
}
