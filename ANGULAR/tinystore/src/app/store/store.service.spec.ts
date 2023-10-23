import { TestBed } from '@angular/core/testing';
import { Store } from './store.service';

describe('Store', () => {
  let serv: Store;

  beforeEach(() => {
    serv = TestBed.inject(Store);
    serv.set('ids', [{ 'id': 1 }]);
    serv._subs$.next(serv.map.get('ids'));
    serv.add('ids', { 'id': 2 });
  });

  afterEach(() => serv._subs$.unsubscribe());

  it('should REMOVE item', () => {
    serv.remove('ids', 1);
    serv.get('ids').subscribe((id: any) => expect(id).toEqual([{ 'id': 1 }]));
  });

  it('should REMOVE item by Key', () => {
    serv.removeByKey('ids', 'id', 2);
    serv.get('ids').subscribe((id: any) => expect(id).toEqual([{ 'id': 1 }]));
  });
});
