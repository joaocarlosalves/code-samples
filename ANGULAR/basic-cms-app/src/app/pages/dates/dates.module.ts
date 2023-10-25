import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DatesComponent } from './dates.component';

const routes: Routes = [
  { path: '', component: DatesComponent }
];

@NgModule({
  declarations: [
    DatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DatesComponent,
    RouterModule
  ]
})
export class DatesModule { }
