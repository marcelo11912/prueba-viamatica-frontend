import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: any = null;
  //public urlApi = "http://localhost:8080/api/"

  constructor(private http: HttpClient ,private router: Router) { }

  iniciarSesion(usuario: string, clave: string) {
    const body = {
      emailOrUsuario: usuario,
      contrasena: clave
    };
    return this.http.post<any>(`/api/usuario/login`, body)
  }

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  logout(idUsuario: number ) {
    const body = {
      idUsuario: idUsuario
    };

    return this.http.post<any>(`/api/usuario/logout`, body)
   
  }
}
