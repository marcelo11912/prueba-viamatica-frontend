import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  actualizar(idUsuario: string, name: string, lastName: string, birthDate: string, status: string,) {
    const body = {
      name: name,
      lastName: lastName,
      birthDate: birthDate,
      status: status
    };
    return this.http.put<any>(`/api/usuario/actualizar/${idUsuario}`, body);
  }

}
