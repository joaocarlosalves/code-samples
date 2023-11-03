import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { ListBoxRouterModule } from './list-box-router';
import { ListBoxComponent } from './list-box.component';

@NgModule({
  declarations: [ListBoxComponent],
  imports: [CommonModule, FormsModule, ListboxModule, ListBoxRouterModule],
})
export class PListBoxModule {}
