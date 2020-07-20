import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { Ejemplo1Component } from './create/ejemplo1.component';
import { Ejemplo2Component } from './transform/ejemplo2.component';
import { Ejemplo3Component } from './filtering/ejemplo3.component';
import { Ejemplo4Component } from './merging/ejemplo4.component';
import { Ejemplo5Component } from './multicast/ejemplo5.component';
import { Ejemplo6Component } from './catch/ejemplo6.component';
import { Ejemplo7Component } from './utility/ejemplo7.component';
import { Ejemplo8Component } from './conditional/ejemplo8.component';
import { Ejemplo9Component } from './maths/ejemplo9.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [Ejemplo1Component, Ejemplo2Component, Ejemplo3Component, Ejemplo4Component, Ejemplo5Component, Ejemplo6Component, Ejemplo7Component, Ejemplo8Component, Ejemplo9Component, ListadoComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    EjemplosRoutingModule
  ]
})
export class EjemplosModule { }
