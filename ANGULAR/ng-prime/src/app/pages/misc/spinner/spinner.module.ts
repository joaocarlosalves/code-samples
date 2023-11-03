import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerRouterModule } from './spinner-router';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, FormsModule, ProgressSpinnerModule, SpinnerRouterModule]
})
export class PSpinnerModule { }
