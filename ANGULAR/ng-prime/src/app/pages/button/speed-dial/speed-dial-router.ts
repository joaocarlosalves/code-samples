import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeedDialComponent } from './speed-dial.component';

const routes: Routes = [{ path: '', component: SpeedDialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeedDialRouterModule { }
