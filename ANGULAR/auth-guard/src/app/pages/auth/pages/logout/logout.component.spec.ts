import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LogoutComponent } from './logout.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

describe('LogoutComponent', () => {
  let component: LogoutComponent,
      fixture: ComponentFixture<LogoutComponent>,
      authService: AuthService,
      router: Router;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['logout']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => expect(component).toBeTruthy());

  it('should call AuthService.logout on initialization', () => expect(authService.logout).toHaveBeenCalled());

  it('should navigate to "/auth/login" after 10 seconds', fakeAsync(() => {
    component.ngOnInit();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
    tick(10000);
  }));
});
