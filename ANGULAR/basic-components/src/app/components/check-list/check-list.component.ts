import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.scss']
})
export class CheckListComponent implements OnInit {
  border: boolean = false;
  right: boolean = false;
  checkedItems: any = [];
  @Input() list: any = [];
  @Input('border') set setBorder(border: boolean | '') { this.border = border === '' || border }
  @Input('right') set setRight(right: boolean | '') { this.right = right === '' || right }
  @Output() getCheckList = new EventEmitter();

  ngOnInit() { this.setChecked(1) }

  setChecked(id: any) {
    if(this.checkedItems.indexOf(id) !== -1) this.checkedItems = this.checkedItems.filter((d: any) => { return d != id });
    else this.checkedItems.push(id);
  }

  getChecked(id: any) {
    let active = this.checkedItems.filter((d: any) => { return d != id ? "" : "active" });
    return active;
  }
}
