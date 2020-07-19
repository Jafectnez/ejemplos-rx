import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './ejemplo8/ejemplo8.component';
import { Ejemplo9Component } from './ejemplo9/ejemplo9.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [Ejemplo1Component, Ejemplo2Component, Ejemplo3Component, Ejemplo4Component, Ejemplo5Component, Ejemplo6Component, Ejemplo7Component, Ejemplo8Component, Ejemplo9Component, ListadoComponent],
  imports: [
    CommonModule,

    EjemplosRoutingModule
  ]
})
export class EjemplosModule { }
