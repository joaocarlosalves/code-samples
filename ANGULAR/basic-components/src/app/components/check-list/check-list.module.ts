import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon-module';
import { CheckListComponent } from './check-list.component';

@NgModule({
  declarations: [CheckListComponent],
  imports: [CommonModule, IconModule],
  exports: [CheckListComponent]
})
export class CheckListModule { }
