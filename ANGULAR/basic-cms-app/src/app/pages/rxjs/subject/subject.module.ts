import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

@NgModule({
  declarations: [
    CompAComponent,
    CompBComponent,
    SubjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SubjectComponent]
})
export class SubjectModule { }
