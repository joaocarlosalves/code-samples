import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaTabsComponent } from './p-tabs.component';
import { PootaTabsHeaderComponent } from './p-tabs-header.component';
import { PootaTabComponent } from './p-tab.component';
import { PootaTabContentComponent } from './p-tab-content.component';
import { PootaBorderDirectiveModule} from 'src/app/directives/p-border.directive';
import { PootaBackgroundDirectiveModule } from 'src/app/directives/p-background.directive';

@NgModule({
  declarations: [
    PootaTabsComponent,
    PootaTabsHeaderComponent,
    PootaTabComponent,
    PootaTabContentComponent
  ],
  imports: [
    CommonModule,
    PootaBorderDirectiveModule,
    PootaBackgroundDirectiveModule
  ],
  exports: [
    PootaTabsComponent,
    PootaTabsHeaderComponent,
    PootaTabComponent,
    PootaTabContentComponent
  ]
})
export class PootaTabsModule { }
