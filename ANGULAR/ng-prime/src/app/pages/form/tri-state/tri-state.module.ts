import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TriStateRouterModule } from './tri-state-router';
import { TriStateComponent } from './tri-state.component';

@NgModule({
  declarations: [TriStateComponent],
  imports: [
    CommonModule,
    FormsModule,
    TriStateCheckboxModule,
    TriStateRouterModule,
  ],
})
export class PTriStateModule {}
