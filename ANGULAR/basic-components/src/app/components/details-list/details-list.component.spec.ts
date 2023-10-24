import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsListComponent } from './details-list.component';

describe('DetailsListComponent', () => {
  let component: DetailsListComponent;
  let fixture: ComponentFixture<DetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsListComponent]
    });
    fixture = TestBed.createComponent(DetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
