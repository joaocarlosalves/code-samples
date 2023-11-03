import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyFilterComponent } from './key-filter.component';

const routes: Routes = [{ path: '', component: KeyFilterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyFilterRouterModule { }
