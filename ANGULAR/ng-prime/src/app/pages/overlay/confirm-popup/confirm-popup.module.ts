import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmPopupRouterModule } from './confirm-popup-router';
import { ConfirmPopupComponent } from './confirm-popup.component';

@NgModule({
  declarations: [ConfirmPopupComponent],
  imports: [
    CommonModule,
    ConfirmPopupModule,
    ToastModule,
    ButtonModule,
    ConfirmPopupRouterModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PConfirmPopupModule {}
