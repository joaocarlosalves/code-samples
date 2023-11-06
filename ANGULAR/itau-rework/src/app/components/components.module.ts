import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaButtonModule } from './button/p-button.module';
import { PootaIconModule } from './icons/p-icon-module';

@NgModule({
  imports: [CommonModule, PootaButtonModule, PootaIconModule],
  exports: [PootaButtonModule, PootaIconModule],
})
export class PootaComponentsModule {}
