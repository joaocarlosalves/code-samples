import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'confirm-dialog', loadChildren: () => import('./confirm-dialog/confirm-dialog.module').then(m => m.PConfirmDialogModule) },
  { path: 'confirm-popup',  loadChildren: () => import('./confirm-popup/confirm-popup.module').then(m => m.PConfirmPopupModule) },
  { path: 'dialog',         loadChildren: () => import('./dialog/dialog.module').then(m => m.PDialogModule) },
  { path: 'overlay-panel',  loadChildren: () => import('./overlay-panel/overlay-panel.module').then(m => m.POverlayPanelModule) },
  { path: 'sidebar',        loadChildren: () => import('./sidebar/sidebar.module').then(m => m.PSidebarModule) },
  { path: 'tooltip',        loadChildren: () => import('./tooltip/tooltip.module').then(m => m.PTooltipModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlayRouterModule { }
