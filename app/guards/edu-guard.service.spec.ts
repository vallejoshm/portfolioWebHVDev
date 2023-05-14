import { TestBed } from '@angular/core/testing';

import { EduGuardService } from './edu-guard.service';

describe('EduGuardService', () => {
  let service: EduGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
