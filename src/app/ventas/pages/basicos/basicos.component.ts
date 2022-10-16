import {Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'christian';
  nombreUpper: string = 'CHRISTIAN';
  nombreCompleto: string = 'chrIsTIAn lozaNO'

}
