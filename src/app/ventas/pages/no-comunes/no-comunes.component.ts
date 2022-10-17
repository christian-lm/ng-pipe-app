import {Component} from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Christian';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pepe', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

}
