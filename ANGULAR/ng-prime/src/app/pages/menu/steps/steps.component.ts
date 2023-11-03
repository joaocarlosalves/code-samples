import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'steps',
  templateUrl: './steps.component.html',
  providers: [MessageService],
})
export class StepsComponent {
  items = [
    {
      label: 'Personal',
      routerLink: '',
    },
    {
      label: 'Seat',
      routerLink: '',
    },
    {
      label: 'Payment',
      routerLink: '',
    },
    {
      label: 'Confirmation',
      routerLink: '',
    },
  ];
  items2: any;
  activeIndex: number = 0;

  constructor(public messageService: MessageService) {}

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  ngOnInit() {
    this.items2 = [
      {
        label: 'Personal',
        command: (event: any) =>
          this.messageService.add({
            severity: 'info',
            summary: 'First Step',
            detail: event.item.label,
          }),
      },
      {
        label: 'Seat',
        command: (event: any) =>
          this.messageService.add({
            severity: 'info',
            summary: 'Second Step',
            detail: event.item.label,
          }),
      },
      {
        label: 'Payment',
        command: (event: any) =>
          this.messageService.add({
            severity: 'info',
            summary: 'Third Step',
            detail: event.item.label,
          }),
      },
      {
        label: 'Confirmation',
        command: (event: any) =>
          this.messageService.add({
            severity: 'info',
            summary: 'Last Step',
            detail: event.item.label,
          }),
      },
    ];
  }
}
