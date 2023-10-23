import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent2 } from './child.component';

describe('ChildComponent2', () => {
  let component: ChildComponent2;
  let fixture: ComponentFixture<ChildComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
