import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';

@NgModule({
  declarations: [Ejemplo1Component],
  imports: [
    CommonModule,

    EjemplosRoutingModule
  ]
})
export class EjemplosModule { }
