import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeSelectComponent } from './tree-select.component';

const routes: Routes = [{ path: '', component: TreeSelectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeSelectRouterModule { }
