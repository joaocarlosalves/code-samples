import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { PDividerRouterModule } from './divider-router';
import { DividerComponent } from './divider.component';

@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule, FormsModule, DividerModule, PDividerRouterModule]
})
export class PDividerModule {}
