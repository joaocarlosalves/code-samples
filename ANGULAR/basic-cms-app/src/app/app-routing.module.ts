import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/dates/dates.module').then(m => m.DatesModule) },
  { path: 'arrays-objects', loadChildren: () => import('./pages/arrays-objects/arrays-objects.module').then(m => m.ArraysObjectsModule) },
  { path: 'base64', loadChildren: () => import('./pages/base64/base64.component').then(m => m.Base64Module) },
  { path: 'crud', loadChildren: () => import('./pages/crud/crud.module').then(m => m.CrudModule) },
  { path: 'dates', loadChildren: () => import('./pages/dates/dates.module').then(m => m.DatesModule) },
  { path: 'form', loadChildren: () => import('./pages/form/form.component').then(m => m.FormModule) },
  { path: 'rxjs', loadChildren: () => import('./pages/rxjs/rxjs.module').then(m => m.RxjsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
