import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuBarRouterModule } from './menu-bar-router';
import { MenuBarComponent } from './menu-bar.component';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [CommonModule,InputTextModule, MenubarModule, MenuBarRouterModule]
})
export class MenuBarModule { }
