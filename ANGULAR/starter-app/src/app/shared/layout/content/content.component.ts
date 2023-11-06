import { Component, Input, OnInit } from '@angular/core';
import { pageTitle } from '../layout-utils';

@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  @Input() page: string = '';

  ngOnInit() { this.page = pageTitle() }
}
