import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'button',       loadChildren: () => import('./button/button.module').then(m => m.PButtonModule) },
  { path: 'split-button', loadChildren: () => import('./split-button/split-button.module').then(m => m.PSplitButtonModule) },
  { path: 'speed-dial',   loadChildren: () => import('./speed-dial/speed-dial.module').then(m => m.PSpeedDialModule ) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRouterModule { }
