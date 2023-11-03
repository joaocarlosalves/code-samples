import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputSwitchComponent } from './input-switch.component';

const routes: Routes = [{ path: '', component: InputSwitchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputSwitchRouterModule { }
