import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationRouterModule } from './pagination-router';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, NgbPaginationModule, PaginationRouterModule],
  exports: [PaginationComponent, PaginationRouterModule]
})
export class PaginationModule { }
