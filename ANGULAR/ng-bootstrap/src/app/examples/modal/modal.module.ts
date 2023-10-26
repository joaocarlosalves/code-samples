import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRouterModule } from './modal-router';
import { ModalComponent } from './modal.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, NgbDatepickerModule, ModalRouterModule],
  exports: [ModalComponent, ModalRouterModule]
})
export class ModalModule { }
