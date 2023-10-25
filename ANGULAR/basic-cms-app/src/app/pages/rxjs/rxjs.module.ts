import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubjectModule } from './subject/subject.module';
import { PootaTabsModule } from '../shared/tabs/p-tabs.module';
import { RxjsComponent } from './rxjs.component';
import { PootaTableModule } from '../shared/table/p-table.module';

const routes: Routes = [
  { path: '', component: RxjsComponent }
];

@NgModule({
  declarations: [RxjsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PootaTabsModule,
    PootaTableModule,
    SubjectModule,
    RouterModule.forChild(routes)
  ],
  exports: [RxjsComponent]
})
export class RxjsModule { }
