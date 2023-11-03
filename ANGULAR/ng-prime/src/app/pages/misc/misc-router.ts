import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'avatar',       loadChildren: () => import('./avatar/avatar.module').then(m => m.PAvatarModule) },
  { path: 'badge',        loadChildren: () => import('./badge/badge.module').then(m => m.PBadgeModule) },
  { path: 'block-ui',     loadChildren: () => import('./block-ui/block-ui.module').then(m => m.PBlockUiModule) },
  { path: 'chips',        loadChildren: () => import('./chips/chips.module').then(m => m.PChipsModule) },
  { path: 'drag-drop',    loadChildren: () => import('./drag-drop/drag-drop.module').then(m => m.PDragDropModule) },
  { path: 'file-upload',  loadChildren: () => import('./upload/upload.module').then(m => m.PUploadModule) },
  { path: 'progress-bar', loadChildren: () => import('./progress-bar/progress-bar.module').then(m => m.PProgressBarModule) },
  { path: 'scroll-top',   loadChildren: () => import('./scroll-top/scroll-top.module').then(m => m.PScrollTopModule) },
  { path: 'skeleton',     loadChildren: () => import('./skeleton/skeleton.module').then(m => m.PSkeletonModule) },
  { path: 'spinner',      loadChildren: () => import('./spinner/spinner.module').then(m => m.PSpinnerModule) },
  { path: 'tag',          loadChildren: () => import('./tag/tag.module').then(m => m.PTagModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscRouterModule { }
