import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { SplitButtonRouterModule } from './split-button-router';
import { SplitButtonComponent } from './split-button.component';

@NgModule({
  declarations: [SplitButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    SplitButtonModule,
    ToastModule,
    SplitButtonRouterModule,
  ],
  providers: [ MessageService ]
})
export class PSplitButtonModule {}
