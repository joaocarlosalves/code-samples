import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelMenuComponent } from './panel-menu.component';

const routes: Routes = [{ path: '', component: PanelMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelMenuRouterModule { }
