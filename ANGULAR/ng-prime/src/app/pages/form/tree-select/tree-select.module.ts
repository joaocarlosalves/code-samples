import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeSelectRouterModule } from './tree-select-router';
import { TreeSelectComponent } from './tree-select.component';

@NgModule({
  declarations: [TreeSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    TreeSelectModule,
    TreeSelectRouterModule,
  ],
})
export class PTreeSelectModule {}
