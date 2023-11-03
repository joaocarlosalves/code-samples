import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'breadcrumb',   loadChildren: () => import('./breadcrumb/breadcrumb.module').then(m => m.PBreadcrumbModule) },
  { path: 'context-menu', loadChildren: () => import('./context-menu/context-menu.module').then(m => m.PContextMenuModule) },
  { path: 'menu',         loadChildren: () => import('./menu/menu.module').then(m => m.PMenuModule) },
  { path: 'mega-menu',    loadChildren: () => import('./mega-menu/mega-menu.module').then(m => m.PMegaMenuModule) },
  { path: 'menu-bar',     loadChildren: () => import('./menu-bar/menu-bar.module').then(m => m.MenuBarModule) },
  { path: 'panel-menu',   loadChildren: () => import('./panel-menu/panel-menu.module').then(m => m.PPanelMenuModule) },
  { path: 'steps',        loadChildren: () => import('./steps/steps.module').then(m => m.PStepsModule) },
  { path: 'tiered-menu',  loadChildren: () => import('./tiered-menu/tiered-menu.module').then(m => m.PTieredMenuModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRouterModule { }
