import {Component} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Christian';
  genero: string = 'M';
  invitacionMap = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pepe', 'Juan', 'Fran', 'Jaime'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  /**
   * Metodo para cambiar el nombre y el genero de la persona del ejemplo 1
   */
  cambiarPersona() {
    // Se comprueba el genero actual
    if (this.genero === 'M') {
      this.nombre = 'Susana';
      this.genero = 'F';
    } else {
      this.nombre = 'Christian';
      this.genero = 'M';
    }
  }

  /**
   * Metodo para borrar un cliente del array de clientes
   */
  borrarCliente() {
    this.clientes.splice(0, 1);
  }


  // Key value Pipe
  persona = {
    nombre: 'Christian',
    edad: 25,
    direccion: 'Madrid, España'
  }

  // JSON Pipes
  heroes = [
    {
      nombre: 'Iron Man',
      edad: 40
    },
    {
      nombre: 'Spiderman',
      edad: 16
    },
    {
      nombre: 'Thor',
      edad: 10000
    }
  ]

  // Async pipe
  miObservable = interval(1000); // Va a emitir numeros desde 0 cada 1segundo

  valorPromesa = new Promise(resolve => {

    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });
}
