import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnobComponent } from './knob.component';

const routes: Routes = [{ path: '', component: KnobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnobRouterModule { }
