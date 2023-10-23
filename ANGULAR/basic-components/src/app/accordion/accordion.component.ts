import { Component, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  radius: boolean = false;
  bordered: boolean = false;
  bottom: boolean = false;
  @Input() title: string = 'Accordion Title';
  @Input() open: boolean = false;
  @Input('no-icon') noIcon: boolean = false;
  @Input() opened: string = '↷';
  @Input() closed: string = '↺';
  @Input('border-bottom') set setBottom(b: boolean | '') { this.bottom = b === '' || b }
  @Input('border') set setBorder(b: boolean | '') { this.bordered = b === '' || b }
  @Input('rounded') set setRounded(r: boolean | '') { this.radius = r === '' || r }
}
