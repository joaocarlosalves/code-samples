import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressBarRouterModule } from './progress-bar-router';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ProgressBarModule,
    ProgressBarRouterModule,
  ],
})
export class PProgressBarModule {}
