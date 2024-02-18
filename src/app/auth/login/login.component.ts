import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './service/auth.service';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  showPassword: boolean = false;
  loading = false;

  constructor(private apiLogin: AuthService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    if (localStorage.getItem('sessionV') === 'active') {
      this.router.navigate(['/principal']);
    }
  }

  login() {
    if (this.email.trim() || this.password.trim()) {
      this.apiLogin.iniciarSesion(this.email, this.password).subscribe(response => {
        localStorage.setItem('sessionV', 'active');
        this.apiLogin.setIsAuthenticated(true);
        this.apiLogin.setToken(response.token)
        localStorage.setItem('user', JSON.stringify(response));
        // Redireccionar al componente Home
        this.router.navigate(['/principal']);
        this.toastr.success('¡Bienvenido!', 'Inicio de sesión exitoso');
      }, error => {
        console.log(error)
        this.toastr.error(error.error.error, 'Error');
      });
    } else {
      this.toastr.error("Existen campos vacios");

    }


  }

}
