import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OrgChartRouterModule } from './order-list-router';
import { OrgChartComponent } from './org-chart.component';

@NgModule({
  declarations: [OrgChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrganizationChartModule,
    OrgChartRouterModule,
  ],
})
export class POrgChartModule {}
