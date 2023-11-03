import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonRouterModule } from './skeleton-bar-router';
import { SkeletonComponent } from './skeleton.component';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [CommonModule, SkeletonModule, TableModule, SkeletonRouterModule],
})
export class PSkeletonModule {}
