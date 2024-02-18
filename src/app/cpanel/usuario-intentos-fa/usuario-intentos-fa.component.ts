import { Component } from '@angular/core';
import { UsuarioDetallesService } from '../detalle-usuario/service/usuario-detalles.service';

@Component({
  selector: 'app-usuario-intentos-fa',
  templateUrl: './usuario-intentos-fa.component.html',
  styleUrls: ['./usuario-intentos-fa.component.css']
})
export class UsuarioIntentosFaComponent {
  listaDetallesUsuario: any = null;

  constructor(
    private detallesUsuarioService: UsuarioDetallesService
  ) { }

  ngOnInit(): void {
    this.mostrarUsuariosDetalles();
  }

  public mostrarUsuariosDetalles() {
    this.detallesUsuarioService.detallesUsuarios().subscribe(data => {
      this.listaDetallesUsuario = data;
    });
  }
}