import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface GroupButtons { text: string, value: string };

@Component({
  selector: 'group-buttons',
  templateUrl: './group-buttons.component.html',
  styleUrls: ['./group-buttons.component.css']
})

export class GroupButtonsComponent {
  activeBtn: number = 0;
  @Input() buttons: GroupButtons[] = [];
  @Output() getActiveButton = new EventEmitter();

  setActiveButton(index: number) {
    this.activeBtn = index;
    this.getActiveButton.emit(this.buttons[index]);
  };
};
