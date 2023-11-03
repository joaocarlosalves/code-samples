import { Component } from '@angular/core';
import { files } from './tree-select-data';

@Component({
  selector: 'tree-select',
  templateUrl: './tree-select.component.html'
})
export class TreeSelectComponent {
  nodes: any[] = files;

  selectedNodes: any;
}
