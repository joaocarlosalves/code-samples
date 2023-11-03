import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollTopComponent } from './scroll-top.component';

const routes: Routes = [{ path: '', component: ScrollTopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollTopRouterModule { }
