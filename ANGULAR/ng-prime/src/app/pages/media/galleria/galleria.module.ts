import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaRouterModule } from './galleria-router';
import { GalleriaComponent } from './galleria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GalleriaComponent],
  imports: [
    CommonModule,
    FormsModule,
    GalleriaModule,
    RadioButtonModule,
    GalleriaRouterModule,
  ],
})
export class PGalleriaModule {}
