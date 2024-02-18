import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { CpanelComponent } from './cpanel.component';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { UsuarioIntentosFaComponent } from './usuario-intentos-fa/usuario-intentos-fa.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';

@NgModule({
  declarations: [
    CpanelComponent,
    DashboardComponent,
    LoginComponent,
    DetalleUsuarioComponent,
    UsuarioIntentosFaComponent,
    UsuariosComponent,
    CargaMasivaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    SharedModule,
    FormsModule,
    DatePipe,
    ReactiveFormsModule
  ]
})
export class CpanelModule { }
