import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'accordion',    loadChildren: () => import('./accordion/accordion.module').then(m => m.PAccordionModule) },
  { path: 'card',         loadChildren: () => import('./card/card.module').then(m => m.PCardModule) },
  { path: 'divider',      loadChildren: () => import('./divider/divider.module').then(m => m.PDividerModule) },
  { path: 'fieldset',     loadChildren: () => import('./fieldset/fieldset.module').then(m => m.PFieldsetModule) },
  { path: 'panel',        loadChildren: () => import('./panel/panel.module').then(m => m.PPanelModule) },
  { path: 'splitter',     loadChildren: () => import('./splitter/splitter.module').then(m => m.PSplitterModule) },
  { path: 'scroll-panel', loadChildren: () => import('./scroll-panel/scroll-panel.module').then(m => m.PScrollPanelModule) },
  { path: 'tab-view',     loadChildren: () => import('./tab-view/tab-view.module').then(m => m.PTabViewModule) },
  { path: 'tool-bar',     loadChildren: () => import('./tool-bar/tool-bar.module').then(m => m.PToolBarModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRouterModule { }
