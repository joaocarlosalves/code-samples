import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'table',            loadChildren: () => import('./table/table.module').then(m => m.PTableModule ) },
  { path: 'data-view',        loadChildren: () => import('./data-view/data-view.module').then(m => m.PDataViewModule ) },
  { path: 'order-list',       loadChildren: () => import('./order-list/order-list.module').then(m => m.POrderListModule ) },
  { path: 'org-chart',        loadChildren: () => import('./org-chart/org-chart.module').then(m => m.POrgChartModule ) },
  { path: 'paginator',        loadChildren: () => import('./paginator/paginator.module').then(m => m.PPaginatorModule ) },
  { path: 'pick-list',        loadChildren: () => import('./pick-list/pick-list.module').then(m => m.PPickListModule ) },
  { path: 'tree',             loadChildren: () => import('./tree/tree.module').then(m => m.PTreeModule ) },
  { path: 'timeline',         loadChildren: () => import('./timeline/timeline.module').then(m => m.PTimelineModule ) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataModuleRouterModule { }
