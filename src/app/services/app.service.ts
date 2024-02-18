import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  sidebar(item: string) {
    document.getElementById(item)?.classList.add('active');
  }

  validarRoles() {
    let usuario = localStorage.getItem('user');
    if (usuario !== null) {
      let data = JSON.parse(usuario);
      console.log(data.roles[0])
      return data.roles[0]
    }
  }
}
