import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmPopupComponent } from './confirm-popup.component';

const routes: Routes = [{ path: '', component: ConfirmPopupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmPopupRouterModule { }
