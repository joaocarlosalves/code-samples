import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffcanvasRouterModule } from './offcanvas-router';
import { OffcanvasComponent } from './offcanvas.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [OffcanvasComponent],
  imports: [CommonModule, NgbDatepickerModule, OffcanvasRouterModule],
  exports: [OffcanvasComponent, OffcanvasRouterModule]
})
export class OffcanvasModule { }
