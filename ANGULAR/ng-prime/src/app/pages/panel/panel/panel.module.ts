import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { PPanelRouterModule } from './panel-router';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, FormsModule, PanelModule, PPanelRouterModule]
})
export class PPanelModule {}
