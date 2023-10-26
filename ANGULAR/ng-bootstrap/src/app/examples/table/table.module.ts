import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRouterModule } from './table-router';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRouterModule],
  exports: [TableComponent, TableRouterModule]
})
export class TableModule { }
