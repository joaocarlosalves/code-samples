import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OverlayPanelRouterModule } from './overlay-panel-router';
import { OverlayPanelComponent } from './overlay-panel.component';

@NgModule({
  declarations: [OverlayPanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    OverlayPanelModule,
    OverlayPanelRouterModule,
  ],
})
export class POverlayPanelModule {}
