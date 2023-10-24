import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRouterModule } from './register-router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, FormsModule, RegisterRouterModule],
  exports: [RegisterComponent, RegisterRouterModule]
})
export class RegisterModule { }
