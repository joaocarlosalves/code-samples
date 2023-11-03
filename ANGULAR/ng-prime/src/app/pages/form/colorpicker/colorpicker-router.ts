import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorpickerComponent } from './colorpicker.component';

const routes: Routes = [{ path: '', component: ColorpickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorpickerRouterModule { }
