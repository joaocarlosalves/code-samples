import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'galleria', loadChildren: () => import('./galleria/galleria.module').then(m => m.PGalleriaModule) },
  { path: 'carousel', loadChildren: () => import('./carousel/carousel.module').then(m => m.PCarouselModule) },
  { path: 'image',    loadChildren: () => import('./image/image.module').then(m => m.PImageModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRouterModule { }
