import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'pages/auth/auth.guard';

const routes: Routes = [
  { path: '',     loadChildren: () => import('pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'about', loadChildren: () => import('pages/about/about.module').then(m => m.AboutModule) },
  { path: 'home', loadChildren: () => import('pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: '**',   loadChildren: () => import('pages/error/error.module').then(m => m.ErrorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
