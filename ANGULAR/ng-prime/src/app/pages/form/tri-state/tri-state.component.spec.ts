import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriStateComponent } from './tri-state.component';

describe('TriStateComponent', () => {
  let component: TriStateComponent;
  let fixture: ComponentFixture<TriStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
