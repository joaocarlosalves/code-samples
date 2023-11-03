import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TabViewRouterModule } from './tab-view-router';
import { TabViewComponent } from './tab-view.component';

@NgModule({
  declarations: [TabViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TabViewModule,
    TabViewRouterModule,
  ],
})
export class PTabViewModule {}
