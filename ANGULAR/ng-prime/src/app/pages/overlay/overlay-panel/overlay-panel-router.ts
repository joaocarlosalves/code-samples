import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayPanelComponent } from './overlay-panel.component';

const routes: Routes = [{ path: '', component: OverlayPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlayPanelRouterModule { }
