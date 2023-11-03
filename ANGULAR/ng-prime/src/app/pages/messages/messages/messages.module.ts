import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { PMessagesRouterModule } from './messages-router';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, MessagesModule, PMessagesRouterModule]
})
export class PMessagesModule { }
