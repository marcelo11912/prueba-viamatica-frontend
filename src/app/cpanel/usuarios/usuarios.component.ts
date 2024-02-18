import { Component, TemplateRef } from '@angular/core';
import { UsuarioDetallesService } from '../detalle-usuario/service/usuario-detalles.service';
import { UsuariosService } from './service/usuarios.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalServiceService } from './service/modal-service.service';

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
    private modalService: ModalServiceService
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
    this.usuarioService.actualizar(this.idUsuario , this.nombre, this.apellido, this.fechaCumple, this.estado).subscribe(
      data => {
        this.toastr.success('Se actualizo con exito', 'Actualizar')
        this.mostrarUsuariosDetalles();
      }, error => {
        console.log(error)
        this.toastr.error('Error al actualizar', 'Actualizar');
      });
  }

  openModal(template: TemplateRef<any>, datos: any) {
    this.idUsuario = datos.idUsuario;
    this.nombre = datos.name;
    this.apellido = datos.lastName;
    this.fechaCumple = datos.birthDate;
    this.estado = datos.status;
    this.modalService.openModal(template);
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
