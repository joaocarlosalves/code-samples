import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';
import { OrderListRouterModule } from './order-list-router';
import { OrderListComponent } from './order-list.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, FormsModule, ButtonModule, OrderListModule, OrderListRouterModule]
})
export class POrderListModule {}
