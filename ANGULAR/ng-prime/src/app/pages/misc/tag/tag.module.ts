import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TagComponent } from './tag.component';
import { TagRouterModule } from './tag-router';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule, TagModule, TagRouterModule]
})
export class PTagModule { }
