import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MegaMenuComponent } from './mega-menu.component';

const routes: Routes = [{ path: '', component: MegaMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MegaMenuRouterModule { }
