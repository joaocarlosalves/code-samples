import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'p-accordion-list',
  template: `
    <div>
      <ul class='p-accordion-list'>
        <ng-content *ngIf='!list'></ng-content>
        <ng-container *ngIf='list'>
          <p-accordion-list-item
            border-color='{{ borderColor || "border-gray" }}'
            icon='{{ icon || "angle-right" }}'
            icon-color='{{ this.iconColor }}'
            title-color='{{ this.titleColor }}'
            *ngFor='let item of list'>
            <span class='b' title>{{ item.title }}</span>
            <div class='pt10px pb10px pr20px pl20px' content>{{ item.text }}</div>
          </p-accordion-list-item>
        </ng-container>
      </ul>
    </div>
  `,
  styleUrls: ['./p-accordion-list.css']
})
export class PootaAccordionListComponent implements OnInit {
  @Input() list: any = '';
  @Input() icon: string = '';
  @Input('icon-color') iconColor: string = '';
  @Input('title-color') titleColor: string = '';
  @Input('border-color') borderColor: string = '';

  ngOnInit() {
    if(this.borderColor === "none") this.borderColor = "no-border";
  }

  constructor() {}
}
