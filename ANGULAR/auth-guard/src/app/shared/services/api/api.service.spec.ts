import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request', () => {
    const what = 'example';
    const end = 'param1=1&param2=2';
    const expectedUrl = `localhost/auth-guard/${what}?${end}`;

    service.get(what, end).subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush({}); // Simulate a response
  });

  it('should send a GET request', () => {
    const what = 'example';
    const end = '';
    const expectedUrl = `localhost/auth-guard/${what}?${end}`;

    service.get(what, end).subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush({}); // Simulate a response
  });

  it('should send a POST request', () => {
    const end = 'example';
    const body = { key: 'value' };
    const expectedUrl = `localhost/auth-guard/${end}`;

    service.post(end, body).subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(body);
    req.flush({}); // Simulate a response
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
