import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });

    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should set "logged" to "true" on login', () => {
    authService.login();
    const isLogged = window.localStorage.getItem('logged');
    expect(isLogged).toBe('true');
  });

  it('should set "logged" to "false" on logout', () => {
    authService.logout();
    const isLogged = window.localStorage.getItem('logged');
    expect(isLogged).toBe('false');
  });

  it('should return "true" for isAuthenticated if "logged" is "true"', () => {
    window.localStorage.setItem('logged', 'true');
    const result = authService.isAuthenticated();
    expect(result).toBe('true');
  });

  it('should return "false" for isAuthenticated if "logged" is "false"', () => {
    window.localStorage.setItem('logged', 'false');
    const result = authService.isAuthenticated();
    expect(result).toBe('false');
  });
});
