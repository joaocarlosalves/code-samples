import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { AccordionModule } from './accordion/accordion.module';
import { AlertModule } from './alert/alert.module';

@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    AccordionModule,
    AlertModule
  ],
  exports: [ExamplesComponent]
})
export class ExamplesModule { }
