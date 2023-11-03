import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriStateComponent } from './tri-state.component';

const routes: Routes = [{ path: '', component: TriStateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriStateRouterModule { }
