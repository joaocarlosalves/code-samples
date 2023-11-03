import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitButtonComponent } from './split-button.component';

const routes: Routes = [{ path: '', component: SplitButtonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplitButtonRouterModule { }
