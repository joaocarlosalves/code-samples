import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ContextMenuRouterModule } from './context-menu-router';
import { ContextMenuComponent } from './context-menu.component';

@NgModule({
  declarations: [ContextMenuComponent],
  imports: [CommonModule, FormsModule, ContextMenuModule, ContextMenuRouterModule]
})
export class PContextMenuModule { }
