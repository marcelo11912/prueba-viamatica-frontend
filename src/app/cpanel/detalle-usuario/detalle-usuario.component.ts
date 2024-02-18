import { Component } from '@angular/core';
import { UsuarioDetallesService } from './service/usuario-detalles.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent {
  listaDetallesUsuario: any = null;

  constructor(
    private detallesUsuarioService: UsuarioDetallesService
  ) { }

  ngOnInit(): void {
    this.mostrarUsuariosDetalles();
  }

  public mostrarUsuariosDetalles() {
    this.detallesUsuarioService.detallesUsuarios().subscribe(data => {
      this.listaDetallesUsuario = data.map((usuario: any) => {
        if (usuario.sessionActive === "1") {
          console.log(usuario.sessionActive)
          usuario.sessionActive = 'Activa';
        } else if (usuario.sessionActive === "0") {
          usuario.sessionActive = 'Inactiva';
        } else {
          usuario.sessionActive = 'Sin Ingreso';
          
        }
        return usuario;
      });;
    });
  }
}
