import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TieredMenuComponent } from './tiered-menu.component';

const routes: Routes = [{ path: '', component: TieredMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TieredMenuRouterModule { }
