import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDetallesService {

  constructor(private http: HttpClient) { }

  detallesUsuarios() {
    
    return this.http.get<any>(`/api/usuario/all`)
  }
}
