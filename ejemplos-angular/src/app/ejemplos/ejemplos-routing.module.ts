import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './ejemplo8/ejemplo8.component';
import { Ejemplo9Component } from './ejemplo9/ejemplo9.component';

const routes: Routes = [
  {
    path: 'create',
    component: Ejemplo1Component
  },
  {
    path: 'transform',
    component: Ejemplo2Component
  },
  {
    path: 'filtering',
    component: Ejemplo3Component
  },
  {
    path: 'merging',
    component: Ejemplo4Component
  },
  {
    path: 'multicast',
    component: Ejemplo5Component
  },
  {
    path: 'catch',
    component: Ejemplo6Component
  },
  {
    path: 'utility',
    component: Ejemplo7Component
  },
  {
    path: 'conditional',
    component: Ejemplo8Component
  },
  {
    path: 'maths',
    component: Ejemplo9Component
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EjemplosRoutingModule {}
