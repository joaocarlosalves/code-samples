import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MainHeaderComponent } from './main-header.component';
import { AuthService } from 'app/pages/auth/services/auth.service';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHeaderComponent],
      providers: [AuthService],
    });

    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with logged set to false', () => {
    expect(component.logged).toBeFalsy();
  });

  it('should call checkLogged every 100ms', fakeAsync(() => {
    const authService = TestBed.inject(AuthService);
    const checkLoggedSpy = spyOn(component, 'checkLogged').and.callThrough();
    component.ngOnInit();
    expect(checkLoggedSpy).not.toHaveBeenCalled();
    tick(100);
    expect(checkLoggedSpy).toHaveBeenCalledTimes(1);
    tick(100);
    expect(checkLoggedSpy).toHaveBeenCalledTimes(2);
  }));

  it('should set logged to true if the user is authenticated', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'isAuthenticated').and.returnValue('true');
    component.checkLogged();
    expect(component.logged).toBeTruthy();
  });

  it('should set logged to false if the user is not authenticated', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'isAuthenticated').and.returnValue('false');
    component.checkLogged();
    expect(component.logged).toBeFalsy();
  });
});

