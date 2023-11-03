import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CascadeSelectComponent } from './cascade-select.component';

const routes: Routes = [{ path: '', component: CascadeSelectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CascadeSelectRouterModule { }
