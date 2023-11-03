import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDialogRouterModule } from './confirm-dialog-router';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastModule,
    ConfirmDialogRouterModule,
  ],
  providers: [ConfirmationService, MessageService]
})
export class PConfirmDialogModule {}
