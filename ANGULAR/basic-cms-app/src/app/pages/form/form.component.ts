import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';

@Component({
  selector: 'form',
  templateUrl: './form.component.html'
})
export class FormComponent {
}

const routes: Routes = [
  { path: '', component: FormComponent }
];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormComponent,
    RouterModule
  ]
})
export class FormModule {}
