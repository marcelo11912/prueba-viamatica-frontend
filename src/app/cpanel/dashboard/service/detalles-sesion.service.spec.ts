import { TestBed } from '@angular/core/testing';

import { DetallesSesionService } from './detalles-sesion.service';

describe('DetallesSesionService', () => {
  let service: DetallesSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
