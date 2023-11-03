import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ImageRouterModule } from './image-router';
import { ImageComponent } from './image.component';

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule, FormsModule, ImageModule, ImageRouterModule],
})
export class PImageModule {}
