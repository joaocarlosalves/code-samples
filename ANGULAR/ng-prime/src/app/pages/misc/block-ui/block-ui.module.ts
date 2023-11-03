import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { BlockUIModule } from 'primeng/blockui';
import { BlockUiComponent } from './block-ui.component';
import { BlockUiRouterModule } from './block-ui-router';

@NgModule({
  declarations: [BlockUiComponent],
  imports: [
    CommonModule,
    BlockUIModule,
    PanelModule,
    ButtonModule,
    BlockUiRouterModule,
  ],
})
export class PBlockUiModule {}
