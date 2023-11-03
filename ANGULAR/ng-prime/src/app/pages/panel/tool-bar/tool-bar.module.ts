import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolBarRouterModule } from './tool-bar-router';
import { ToolBarComponent } from './tool-bar.component';

@NgModule({
  declarations: [ToolBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    ToolBarRouterModule,
  ],
})
export class PToolBarModule {}
