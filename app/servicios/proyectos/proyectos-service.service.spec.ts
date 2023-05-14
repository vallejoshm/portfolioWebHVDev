import { TestBed } from '@angular/core/testing';

import { ProyectosServiceService } from './proyectos-service.service';

describe('ProyectosServiceService', () => {
  let service: ProyectosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
