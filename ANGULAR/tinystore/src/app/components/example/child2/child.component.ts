import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store/store.service';

@Component({
  selector: 'child2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent2 implements OnInit {
  blee = [
    { id: 1, text: 'blee: 1' },
    { id: 2, text: 'blee: 2' },
    { id: 3, text: 'blee: 3' },
    { id: 4, text: 'blee: 4' },
    { id: 5, text: 'blee: 5' }
  ];

  constructor(private store: Store) {
    this.store.set('blee', this.blee);
  }

  ngOnInit() {
    //this.store.get('blee').subscribe((blee: any) => this.blee = blee)
  }
}
