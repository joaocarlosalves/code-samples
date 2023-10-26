import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollspyRouterModule } from './scrollspy-router';
import { ScrollspyComponent } from './scrollspy.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScrollspyComponent],
  imports: [
    CommonModule,
    FormsModule,
    AsyncPipe,
    NgbScrollSpyModule,
    ScrollspyRouterModule],
  exports: [ScrollspyComponent, ScrollspyRouterModule]
})
export class ScrollspyModule { }
