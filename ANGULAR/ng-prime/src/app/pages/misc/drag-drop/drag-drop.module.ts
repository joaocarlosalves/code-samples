import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';
import { DragDropRouterModule } from './drag-drop-router';
import { DragDropComponent } from './drag-drop.component';

@NgModule({
  declarations: [DragDropComponent],
  imports: [CommonModule, FormsModule, DragDropModule, DragDropRouterModule]
})
export class PDragDropModule { }
