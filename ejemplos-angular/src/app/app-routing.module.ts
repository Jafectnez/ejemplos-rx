import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from './ejemplos/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoComponent
  },
  {
    path: 'ejemplos',
    loadChildren: () =>
      import('./ejemplos/ejemplos.module').then(
        (m) => m.EjemplosModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
