import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejemplo1Component } from './create/ejemplo1.component';
import { Ejemplo2Component } from './transform/ejemplo2.component';
import { Ejemplo3Component } from './filtering/ejemplo3.component';
import { Ejemplo4Component } from './merging/ejemplo4.component';
import { Ejemplo5Component } from './multicast/ejemplo5.component';
import { Ejemplo6Component } from './catch/ejemplo6.component';
import { Ejemplo7Component } from './utility/ejemplo7.component';
import { Ejemplo8Component } from './conditional/ejemplo8.component';
import { Ejemplo9Component } from './maths/ejemplo9.component';

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
