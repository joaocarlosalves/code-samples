import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBoxComponent } from './list-box.component';

const routes: Routes = [{ path: '', component: ListBoxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListBoxRouterModule { }
