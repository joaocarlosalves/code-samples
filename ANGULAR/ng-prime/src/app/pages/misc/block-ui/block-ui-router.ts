import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockUiComponent } from './block-ui.component';

const routes: Routes = [{ path: '', component: BlockUiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockUiRouterModule { }
