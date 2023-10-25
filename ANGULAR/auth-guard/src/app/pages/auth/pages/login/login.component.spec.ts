import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['login']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.login and navigate to "/" after 100ms', fakeAsync(() => {
    component.doLogin();

    // Expect the login method to be called.
    expect(authService.login).toHaveBeenCalled();

    // Advance the fake clock by 100ms.
    tick(100);

    // Expect the router's navigate method to be called with the correct route.
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));
});
