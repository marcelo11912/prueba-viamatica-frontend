import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  validarRol: boolean = false;
 constructor(private appService: AppService){}

 
 ngOnInit(): void {
  let validarRol = this.appService.validarRoles();
  console.log()
  if (validarRol.includes("Usuario") ) this.validarRol = true;

}
}
