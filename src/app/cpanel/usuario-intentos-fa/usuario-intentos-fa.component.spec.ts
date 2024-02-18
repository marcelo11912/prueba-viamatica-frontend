import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIntentosFaComponent } from './usuario-intentos-fa.component';

describe('UsuarioIntentosFaComponent', () => {
  let component: UsuarioIntentosFaComponent;
  let fixture: ComponentFixture<UsuarioIntentosFaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioIntentosFaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioIntentosFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
