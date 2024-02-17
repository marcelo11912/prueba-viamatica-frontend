import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  private isAuthenticated = false;
  private token: any = null;
  public urlApi = "http://localhost:8080/api"

  constructor(private http: HttpClient ,private router: Router) { }

  iniciarSesion(usuario: string, clave: string) {

    const body = {
      emailOrUsuario: usuario,
      contrasena: clave
    };

    return this.http.post<any>(`${this.urlApi}/usuarios/login`, body)
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
      this.token =  localStorage.getItem('token');
    }
    return this.token;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }

}
