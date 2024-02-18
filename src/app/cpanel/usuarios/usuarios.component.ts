import { Component } from '@angular/core';
import { UsuarioDetallesService } from '../detalle-usuario/service/usuario-detalles.service';
import { UsuariosService } from './service/usuarios.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  listaDetallesUsuario: any = null;
  idUsuario: string = "";
  nombre: string = "";
  apellido: string = "";
  fechaCumple: string = "";
  estado: string = "";


  constructor(
    private detallesUsuarioService: UsuarioDetallesService,
    private usuarioService: UsuariosService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.mostrarUsuariosDetalles();
  }

  public mostrarUsuariosDetalles() {
    this.detallesUsuarioService.detallesUsuarios().subscribe(data => {
      this.listaDetallesUsuario = data
    });
  }

  public actualizarUsuario() {
    this.usuarioService.actualizar("", this.nombre, this.apellido, this.fechaCumple, this.estado).subscribe(
      data => {
        this.toastr.success('Se actualizo con exito', 'Actualizar');
      }, error => {
        console.log(error)
        this.toastr.error('Error al actualizar', 'Actualizar');
      });
  }

  public modalEditar(datos: any) {
    this.idUsuario = datos.id_usuario;
    this.nombre = datos.name;
    this.apellido = datos.id_categoria;
    this.fechaCumple = datos.id_categoria;
    this.estado = datos.id_categoria;
  }

}
