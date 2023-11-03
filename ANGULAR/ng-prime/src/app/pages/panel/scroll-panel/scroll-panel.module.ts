import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PScrollPanelRouterModule } from './scroll-panel-router';
import { ScrollPanelComponent } from './scroll-panel.component';

@NgModule({
  declarations: [ScrollPanelComponent],
  imports: [CommonModule, FormsModule, ScrollPanelModule, PScrollPanelRouterModule]
})
export class PScrollPanelModule {}
