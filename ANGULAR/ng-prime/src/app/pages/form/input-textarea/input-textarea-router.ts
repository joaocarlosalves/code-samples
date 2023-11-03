import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTextareaComponent } from './input-textarea.component';

const routes: Routes = [{ path: '', component: InputTextareaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputTextareaRouterModule { }
