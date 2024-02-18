import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app.service';
import { DetallesSesionService } from './service/detalles-sesion.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = localStorage.getItem('user');
  emailOrUsuario: string = "";
  idUsuario: number = 0;

  numeroIntentos: number = 0;
  ultimaFechaInicio: any = "";
  ultimaFechaCierre: any = "";

  constructor (private AppService: AppService, private detallesSesion: DetallesSesionService) {
    this.AppService.sidebar('dashboard-item');
  }

  ngOnInit(): void {
       if (this.user) {
      const user = JSON.parse(this.user);
      this.idUsuario = user.idUsuario;
      this.emailOrUsuario = user.emailOrUsuario;
    }
    this.infSesion();
  }

  infSesion(){
    this.detallesSesion.detallesSesion(this.idUsuario, this.emailOrUsuario).subscribe(response => {
      this.ultimaFechaInicio= response.fechaInicio;
      this.ultimaFechaCierre= response.fechaFinalizacion;
      this.numeroIntentos = response.numeroIntentos;
    }, error => {
      console.log(error)
    });
  }

  
}
