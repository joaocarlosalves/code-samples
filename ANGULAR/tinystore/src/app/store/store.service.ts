import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Store {
  map: any = new Map();
  _subs$: any = new BehaviorSubject<any>(0);

  set(i: string, p: any) { this.map.set(i, p) }

  add(i: string, p: any) { this.map.get(i).push(p) }

  remove(i: string, x: any) { this.map.get(i).splice(x, 1) }

  removeByKey(i: string, k: string, v: any) { this.map.get(i).forEach((j: any, x: any) => { if(j[k] == v) this.remove(i, x) }) }

  get(i: string) {
    this._subs$.next(this.map.get(i));
    return this._subs$.asObservable();
  }
}
