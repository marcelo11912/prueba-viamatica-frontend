import { Component } from '@angular/core';
import { SnipperService } from 'src/app/services/snipper.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  cargando = this.spinner.cargando;
  constructor(private spinner: SnipperService) { }

}
