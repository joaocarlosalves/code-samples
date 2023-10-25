import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard,
      authService: AuthService,
      router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [AuthGuard, AuthService, Router]});
    authGuard = TestBed.get(AuthGuard);
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  });

  it('should be created', () => expect(authGuard).toBeTruthy());

  it('canActivate should return true if isAuthenticated is true', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue('true');
    spyOn(router, 'navigate');
    const result = authGuard.canActivate();
    expect(result).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('canActivate should navigate to "/auth/login" and return false if isAuthenticated is false', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue('false');
    spyOn(router, 'navigate');
    const result = authGuard.canActivate();
    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('canActivateChild should call canActivate', () => {
    spyOn(authGuard, 'canActivate').and.returnValue(true);
    const result = authGuard.canActivateChild();
    expect(result).toBe(true);
  });
});
