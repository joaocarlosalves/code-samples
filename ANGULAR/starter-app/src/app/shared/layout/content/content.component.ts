import { Component, OnInit } from '@angular/core';
import { pageTitle } from '../layout-utils';

@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  page: string = '';

  ngOnInit() { this.page = pageTitle() }
}
