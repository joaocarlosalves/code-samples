import { TestBed, fakeAsync } from '@angular/core/testing';
import { Router, RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from 'pages/auth/auth.guard';


describe('AppRoutingModule', () => {
  let router: Router;

  const routes: Routes = [
    { path: '',     loadChildren: () => import('pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
    { path: 'auth', loadChildren: () => import('pages/auth/auth.module').then(m => m.AuthModule) },
    { path: 'about', loadChildren: () => import('pages/about/about.module').then(m => m.AboutModule), canActivate: [AuthGuard] },
    { path: 'home', loadChildren: () => import('pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
    { path: '**',   loadChildren: () => import('pages/error/error.module').then(m => m.ErrorModule) }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [AuthGuard],
    });

    router = TestBed.get(Router);
  });
});

