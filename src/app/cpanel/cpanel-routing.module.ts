import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CpanelComponent } from './cpanel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { UsuarioIntentosFaComponent } from './usuario-intentos-fa/usuario-intentos-fa.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';
import { ValidarRolesGuard } from '../validar-roles.guard'; 

const routes: Routes = [
  { 
    path: 'principal', component: CpanelComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },

  { 
    path: 'dashboard', component: CpanelComponent,
    children: [
      { path: 'detalles-usuarios', component: DetalleUsuarioComponent, canActivate: [ValidarRolesGuard] },
      { path: 'intentos-fallidos', component: UsuarioIntentosFaComponent },
    ]
  },

  {
    path: 'mantenimiento', component: CpanelComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'carga-masiva', component: CargaMasivaComponent },
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ], 
  exports: [
    RouterModule
  ]
})
export class CpanelRoutingModule { }
