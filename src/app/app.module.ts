import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

// Modulo personalizado
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app-router.module";
import {VentasModule} from "./ventas/ventas.module";

// Cambiar el local de la app
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

registerLocaleData(localeES);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
