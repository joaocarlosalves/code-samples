import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TieredMenuComponent } from './tiered-menu.component';
import { TieredMenuRouterModule } from './tiered-menu-router';

@NgModule({
  declarations: [TieredMenuComponent],
  imports: [CommonModule, TieredMenuModule, TieredMenuRouterModule]
})
export class PTieredMenuModule { }
