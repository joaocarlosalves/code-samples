import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelMenuRouterModule } from './panel-menu-router';
import { PanelMenuComponent } from './panel-menu.component';

@NgModule({
  declarations: [PanelMenuComponent],
  imports: [CommonModule, PanelMenuModule, PanelMenuRouterModule]
})
export class PPanelMenuModule { }
