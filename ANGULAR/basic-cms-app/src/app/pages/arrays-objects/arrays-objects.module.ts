import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArraysObjectsComponent } from './arrays-objects.component';
import { SearchCountryComponent } from './search-country/search-country.component';
import { PootaTabsModule } from '../shared/tabs/p-tabs.module';
import { PootaTableModule } from './../shared/table/p-table.module';
import { PushPopComponent } from './push-pop/push-pop.component';
import { JoinConcatComponent } from './join-concat/join-concat.component';

const routes: Routes = [
  { path: '', component: ArraysObjectsComponent }
];

@NgModule({
  declarations: [
    ArraysObjectsComponent,
    SearchCountryComponent,
    PushPopComponent,
    JoinConcatComponent
  ],
  imports: [
    CommonModule,
    PootaTabsModule,
    PootaTableModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class ArraysObjectsModule { }
