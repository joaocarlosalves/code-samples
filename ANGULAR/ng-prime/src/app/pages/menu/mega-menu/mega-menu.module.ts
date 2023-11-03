import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuRouterModule } from './mega-menu-router';
import { MegaMenuComponent } from './mega-menu.component';

@NgModule({
  declarations: [MegaMenuComponent],
  imports: [
    CommonModule,
    InputTextModule,
    MegaMenuModule,
    MenubarModule,
    MegaMenuRouterModule,
  ],
})
export class PMegaMenuModule {}
