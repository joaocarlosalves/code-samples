import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('examples/accordion/accordion.module').then(m => m.AccordionModule) },
  { path: 'accordion', loadChildren: () => import('examples/accordion/accordion.module').then(m => m.AccordionModule) },
  { path: 'alert', loadChildren: () => import('examples/alert/alert.module').then(m => m.AlertModule) },
  { path: 'carousel', loadChildren: () => import('examples/carousel/carousel.module').then(m => m.CarouselModule) },
  { path: 'collapse', loadChildren: () => import('examples/collapse/collapse.module').then(m => m.CollapseModule) },
  { path: 'datepicker', loadChildren: () => import('examples/datepicker/datepicker.module').then(m => m.DatepickerModule) },
  { path: 'dropdown', loadChildren: () => import('examples/dropdown/dropdown.module').then(m => m.DropdownModule) },
  { path: 'modal', loadChildren: () => import('examples/modal/modal.module').then(m => m.ModalModule) },
  { path: 'nav', loadChildren: () => import('examples/nav/nav.module').then(m => m.NavModule) },
  { path: 'offcanvas', loadChildren: () => import('examples/offcanvas/offcanvas.module').then(m => m.OffcanvasModule) },
  { path: 'pagination', loadChildren: () => import('examples/pagination/pagination.module').then(m => m.PaginationModule) },
  { path: 'popover', loadChildren: () => import('examples/popover/popover.module').then(m => m.PopoverModule) },
  { path: 'progressbar', loadChildren: () => import('examples/progressbar/progressbar.module').then(m => m.ProgressbarModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
