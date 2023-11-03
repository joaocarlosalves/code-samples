import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { TreeRouterModule } from './tree-router';
import { TreeComponent } from './tree.component';

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TreeModule,
    TreeRouterModule,
  ],
})
export class PTreeModule {}
