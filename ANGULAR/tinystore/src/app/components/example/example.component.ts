import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store/store.service';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  providers: [Store]
})
export class ExampleComponent implements OnInit {
  list = [
    { id: 1, text: 'coo: 1' },
    { id: 2, text: 'coo: 2' },
    { id: 3, text: 'coo: 3' },
    { id: 4, text: 'coo: 4' },
    { id: 5, text: 'coo: 5' }
  ]

  peehee = [
    { id: 1, text: 'peehee: 1' },
    { id: 2, text: 'peehee: 2' },
    { id: 3, text: 'peehee: 3' },
    { id: 4, text: 'peehee: 4' },
    { id: 5, text: 'peehee: 5' }
  ]

  blee: any[] = [];

  ooo = true;

  constructor(public store: Store) {
    this.store.set('example', this.list);
    this.store.set('peehee', this.peehee);
  }

  ngOnInit() {
/*     this.store.getStore2('blee').subscribe((blee: any) => {
      console.log('blee 2 ExampleComponent ngOnInit', blee);
    })
     this.store.getStore2('peehee').subscribe((peehee: any) => {
      console.log('peehee 2 ExampleComponent ngOnInit', peehee);
    })
    this.store.getStore2('example').subscribe((example: any) => {
      console.log('example 2 ExampleComponent ngOnInit', example);
    }) */

    this.store.get('blee').subscribe((blee: any) => this.blee = blee)
  }


  setMap() {
    this.list.push({ id: this.list.length + 1, text: `coo: ${ this.list.length + 1 }` })
    this.store.set('example', this.list);
  }

  setMap2() {
    this.peehee.push({ id: this.peehee.length + 1, text: `peehee: ${ this.peehee.length + 1 }` })
    this.store.set('peehee', this.peehee);
  }

  setMap3() {
    this.blee.push({ id: this.blee.length + 1, text: `blee: ${ this.blee.length + 1 }` })
    this.store.set('blee', this.blee);
  }

}
