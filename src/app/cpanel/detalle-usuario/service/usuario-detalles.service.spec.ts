import { TestBed } from '@angular/core/testing';

import { UsuarioDetallesService } from './usuario-detalles.service';

describe('UsuarioDetallesService', () => {
  let service: UsuarioDetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioDetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
