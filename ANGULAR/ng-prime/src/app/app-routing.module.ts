import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',           loadChildren: () => import('pages/home/home.module').then(m => m.HomeModule) },
  { path: 'button',     loadChildren: () => import('pages/button/button.module').then(m => m.ButtonModule) },
  { path: 'data',       loadChildren: () => import('pages/data/data.module').then(m => m.DataModule) },
  { path: 'form',       loadChildren: () => import('pages/form/form.module').then(m => m.FormModule) },
  { path: 'media',      loadChildren: () => import('pages/media/media.module').then(m => m.MediaModule) },
  { path: 'menu',       loadChildren: () => import('pages/menu/menu.module').then(m => m.MenuModule) },
  { path: 'messages',   loadChildren: () => import('pages/messages/messages.module').then(m => m.MMessagesModule) },
  { path: 'misc',       loadChildren: () => import('pages/misc/misc.module').then(m => m.MiscModule) },
  { path: 'overlay',    loadChildren: () => import('pages/overlay/overlay.module').then(m => m.OverlayModule) },
  { path: 'panel',      loadChildren: () => import('pages/panel/panel.module').then(m => m.MPanelModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
