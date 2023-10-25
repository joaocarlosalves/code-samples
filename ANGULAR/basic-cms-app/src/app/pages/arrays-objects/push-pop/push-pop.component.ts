import { Component } from '@angular/core';

@Component({
  selector: 'push-pop',
  templateUrl: './push-pop.component.html',
  styleUrls: ['./push-pop.css']
})
export class PushPopComponent {
  list: any[] = [];
  tags: any = {
    flags: ['array.push()', 'array.pop()', 'array.splice()', 'new Set()']
  }

  addToList(value?: string) {
    let list: any = this.list;
    list.push(value);
    this.list = [...new Set(list)];
  }

  addToListInput(event: any) { if(event.key === 'Enter') this.addToList(event.target.value) }

  removeFromList(index: number) { this.list.splice(index, 1) }

  pop() { this.list.pop() }
}
