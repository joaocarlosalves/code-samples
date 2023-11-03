import { Component } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  messages: Message[] = [
    { severity: 'success', summary: 'Success', detail: 'Message Content' },
  ];
  messages1: Message[] = [
    { severity: 'success', summary: 'Success', detail: 'Message Content' },
    { severity: 'info', summary: 'Info', detail: 'Message Content' },
  ];
  messages2: Message[] = [
    { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
    { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
  ];
}
