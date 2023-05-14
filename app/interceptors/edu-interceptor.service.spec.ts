import { TestBed } from '@angular/core/testing';

import { EduInterceptorService } from './edu-interceptor.service';

describe('EduInterceptorService', () => {
  let service: EduInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
