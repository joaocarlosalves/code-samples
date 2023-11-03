import { Component } from '@angular/core';
import { data, data1, data2, data3 } from './org-chart-data';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'org-chart',
  templateUrl: './org-chart.component.html'
})
export class OrgChartComponent {
  data = data;
  data1 = data1;
  data2 = data2;
  data3 = data3;
  selectedNodes!: TreeNode[];
}
