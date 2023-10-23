import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store/store.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  blee: any[] = [];

  blee$: Subscription;
  //blee$: Observable<any> = this.store.get('blee');

  constructor(private store: Store) {}

  ngOnInit() { this.blee$ = this.store.get('blee').subscribe((blee: any) => this.blee = blee) }

  ngOnDestroy() { this.blee$.unsubscribe(); console.log(this.blee$) }

  setMap() {
    this.blee.push({ id: this.blee.length + 1, text: `blee: ${ this.blee.length + 1 }` })
    this.store.set('blee', this.blee);
  }

  add(item: string) { this.store.add(item, { id: this.blee.length + 1, text: `blee: ${ this.blee.length + 1 }` }) }

  remove(item: string, index: number) { this.store.remove(item, index) }

  removeByKey(item: string, key: string, value: any) { this.store.removeByKey(item, key, value) }
}
