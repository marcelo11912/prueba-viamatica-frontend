import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.css']
})
export class CargaMasivaComponent {
  data: any;

  onFileChange(event: any) {
    let workBook: XLSX.WorkBook | null = null;
    let jsonData: any = null;
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = (e: any) => {
      const data = e.target.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial: any, name: any) => {
        const sheet = workBook?.Sheets[name];
        if (sheet) {
          initial[name] = XLSX.utils.sheet_to_json(sheet);
        }
        return initial;
      }, {});
      this.data = jsonData.Hoja1;

    };
    reader.readAsBinaryString(file);
  }

  upload() {
    // Aquí puedes implementar la lógica para enviar los datos al backend
    console.log('Subir datos al backend', this.data);
  }
}
