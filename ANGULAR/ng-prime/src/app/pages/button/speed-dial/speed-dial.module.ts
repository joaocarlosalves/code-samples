import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { SpeedDialRouterModule } from './speed-dial-router';
import { SpeedDialComponent } from './speed-dial.component';

@NgModule({
  declarations: [SpeedDialComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    SpeedDialModule,
    SpeedDialRouterModule,
  ],
  providers: [MessageService],
})
export class PSpeedDialModule {}
