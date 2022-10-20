import {Component} from '@angular/core';
import {Color, Heroe} from "../../interfaces/ventas.interface";

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  ordenarPor: string = 'nombre';

  heroes: Heroe[] = [
    {
      nombre: 'Iron Man',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Capitan América',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Falcon',
      vuela: true,
      color: Color.negro
    }
  ]

  toggleMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
