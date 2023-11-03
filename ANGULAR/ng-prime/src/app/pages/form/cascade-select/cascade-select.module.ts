import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CascadeSelectRouterModule } from './cascade-select-router';
import { CascadeSelectComponent } from './cascade-select.component';

@NgModule({
  declarations: [CascadeSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    CascadeSelectModule,
    CascadeSelectRouterModule,
    CascadeSelectRouterModule,
  ],
})
export class PCascadeSelectModule {}
