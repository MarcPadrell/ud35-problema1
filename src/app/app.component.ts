import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ud35-problema1';

  nombre: any = "";
  cif: any = "";
  direccion: any = "";
  grupo: any = 0;

  array_cliente: any = [];

  save_client() {

    let array_let = [this.nombre, this.cif, this.direccion, this.grupo];
    this.array_cliente.push(array_let);

  }

}
