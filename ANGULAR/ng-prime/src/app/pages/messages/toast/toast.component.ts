import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  providers: [MessageService],
})
export class ToastComponent {
  visible: boolean = false;

  constructor(private messageService: MessageService) {}

  showConfirm() {
    if (!this.visible) {
      this.messageService.add({
        key: 'confirm',
        sticky: true,
        severity: 'warn',
        summary: 'Are you sure?',
        detail: 'Confirm to proceed',
      });
      this.visible = true;
    }
  }

  onConfirm() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  onReject() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
    });
  }

  showWarn() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: 'Message Content',
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
    });
  }

  showTopLeft() {
    this.messageService.add({
      key: 'tl',
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
    });
  }

  showTopCenter() {
    this.messageService.add({
      key: 'tc',
      severity: 'warn',
      summary: 'Warn',
      detail: 'Message Content',
    });
  }

  showBottomCenter() {
    this.messageService.add({
      key: 'bc',
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

  multi() {
    this.messageService.addAll([
      { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
    ]);
  }
}
