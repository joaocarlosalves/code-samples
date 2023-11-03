import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiSelectComponent } from './multi-select.component';

const routes: Routes = [{ path: '', component: MultiSelectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiSelectRouterModule { }
