import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { CrudFormComponent } from './form/form.component';
import { CrudTableComponent } from './table/table.component';
import { PootaTabsModule } from '../shared/tabs/p-tabs.module';
import { PootaTableModule } from '../shared/table/p-table.module';

const routes: Routes = [
  { path: '', component: CrudComponent }
];

@NgModule({
  declarations: [
    CrudComponent,
    CrudFormComponent,
    CrudTableComponent
  ],
  imports: [
    CommonModule,
    PootaTabsModule,
    PootaTableModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CrudComponent,
    RouterModule
  ]
})
export class CrudModule { }
