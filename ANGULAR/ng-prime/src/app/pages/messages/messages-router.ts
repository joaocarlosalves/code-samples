import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.PMessagesModule) },
  { path: 'toast',    loadChildren: () => import('./toast/toast.module').then(m => m.PToastModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRouterModule { }
