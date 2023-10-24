import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';

fdescribe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionComponent]
    });
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for properties', () => {
    expect(component.title).toBe('Accordion Title');
    expect(component.open).toBe(false);
    expect(component.noIcon).toBe(false);
    expect(component.opened).toBe('↷');
    expect(component.closed).toBe('↺');
    expect(component.bottom).toBe(false);
    expect(component.bordered).toBe(false);
    expect(component.radius).toBe(false);
  });

  it('should set the title correctly', () => {
    component.title = 'New Title';
    expect(component.title).toBe('New Title');
  });

  it('should set the open property correctly', () => {
    component.open = true;
    expect(component.open).toBe(true);
  });

  it('should set the noIcon property correctly', () => {
    component.noIcon = true;
    expect(component.noIcon).toBe(true);
  });

  it('should set the opened property correctly', () => {
    component.opened = 'NewOpenedSymbol';
    expect(component.opened).toBe('NewOpenedSymbol');
  });

  it('should set the closed property correctly', () => {
    component.closed = 'NewClosedSymbol';
    expect(component.closed).toBe('NewClosedSymbol');
  });

  it('should set the bottom property correctly', () => {
    component.setBottom = true;
    expect(component.bottom).toBe(true);
  });

  it('should set the bordered property correctly', () => {
    component.setBorder = true;
    expect(component.bordered).toBe(true);
  });

  it('should set the radius property correctly', () => {
    component.setRounded = true;
    expect(component.radius).toBe(true);
  });
});
