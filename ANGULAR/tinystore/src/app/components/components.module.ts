import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { ChildComponent } from './example/child/child.component';
import { ChildComponent2 } from './example/child2/child.component';

@NgModule({
  declarations: [ExampleComponent, ChildComponent, ChildComponent2],
  imports: [
    CommonModule
  ],
  exports: [ExampleComponent]
})
export class ComponentsModule { }
