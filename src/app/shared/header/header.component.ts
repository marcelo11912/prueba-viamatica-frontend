import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/login/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user = localStorage.getItem('user');
  rol: string = "";
  nombres: string = "";
  idUsuario: number = 0;
  constructor(private apiLogin: AuthService, private router: Router) { }
  ngOnInit(): void {
    if (this.user) {
      const user = JSON.parse(this.user);
      this.nombres = user.nombre + " " + user.apellidos;
      this.idUsuario = user.idUsuario;
      this.rol = user.roles[0];
    }
  }
  logout() {

    this.apiLogin.logout(this.idUsuario).subscribe(response => {
      localStorage.removeItem('sessionV');
      this.router.navigate(['/login']);
    }, error => {
      console.log(error)
    });


  }
}
