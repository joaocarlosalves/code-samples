import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-accordion-list-item',
  template: `
    <li (click)='opened = !opened' class='border-bottom {{ borderColor }}'>
      <span class='flex full center flex-start pointer'>
        <p-icon
          class="mr10px"
          [color]='iconColor'
          [class.rotate90]='opened'
          size="left"
          icon='{{ icon || "angle-right" }}'></p-icon>
        <ng-content select="[title]" class='{{ titleColor }}'></ng-content>
      </span>
      <div [class.p-accordion-list-opened]='opened' [class.p-accordion-list-closed]='!opened'>
        <ng-content select="[content]"></ng-content>
      </div>
    </li>
  `,
  styleUrls: ['./p-accordion-list.css']
})
export class PootaAccordionListItemComponent {
  opened: boolean = false;
  @Input() icon: string = '';
  @Input('icon-color') iconColor: string = '';
  @Input('title-color') titleColor: string = '';
  @Input('border-color') borderColor: string = '';
}
