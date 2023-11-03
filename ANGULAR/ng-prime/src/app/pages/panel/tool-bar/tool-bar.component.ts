import { Component, OnInit } from '@angular/core';
import { items } from './tool-bar-data';

@Component({
  selector: 'tool-bar',
  templateUrl: './tool-bar.component.html'
})
export class ToolBarComponent implements OnInit {
  items: any;

  ngOnInit() {
    this.items = items;
  }
}
