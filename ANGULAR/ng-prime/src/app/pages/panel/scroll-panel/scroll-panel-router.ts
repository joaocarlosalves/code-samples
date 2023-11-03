import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollPanelComponent } from './scroll-panel.component';

const routes: Routes = [{ path: '', component: ScrollPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PScrollPanelRouterModule { }
