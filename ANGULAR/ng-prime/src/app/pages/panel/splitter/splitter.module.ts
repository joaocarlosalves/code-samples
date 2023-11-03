import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { PSplitterRouterModule } from './splitter-router';
import { SplitterComponent } from './splitter.component';

@NgModule({
  declarations: [SplitterComponent],
  imports: [CommonModule, FormsModule, SplitterModule, PSplitterRouterModule]
})
export class PSplitterModule {}
