import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NumerosComponent} from "./ventas/pages/numeros/numeros.component";
import {NoComunesComponent} from "./ventas/pages/no-comunes/no-comunes.component";
import {OrdenarComponent} from "./ventas/pages/ordenar/ordenar.component";
import {BasicosComponent} from "./ventas/pages/basicos/basicos.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: BasicosComponent
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
