import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetallesSesionService {

  constructor(private http: HttpClient) { }

  detallesSesion(idUsuario: number, emailOrUsuario: string) {
    const body = {
      idUsuario: idUsuario,
      emailOrUsuario: emailOrUsuario
    };

    return this.http.post<any>(`/api/usuario/detalles-sesion`, body)
  }

  }
