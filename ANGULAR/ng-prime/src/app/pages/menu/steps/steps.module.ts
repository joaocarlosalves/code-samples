import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { StepsRouterModule } from './steps-router';
import { StepsComponent } from './steps.component';

@NgModule({
  declarations: [StepsComponent],
  imports: [CommonModule, ToastModule, StepsModule, StepsRouterModule],
  providers: [MessageService]
})
export class PStepsModule { }
