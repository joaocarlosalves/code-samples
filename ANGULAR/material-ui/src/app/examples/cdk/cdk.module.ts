import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkComponent } from './cdk.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';


@NgModule({
  declarations: [
    CdkComponent,
    AccordionComponent,
    DragDropComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CdkComponent,
    AccordionComponent,
    DragDropComponent
  ]
})
export class CdkModule { }
