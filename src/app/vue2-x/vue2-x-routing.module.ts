import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue2XPage } from './vue2-x.page';

const routes: Routes = [
  {
    path: '',
    component: Vue2XPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue2XPageRoutingModule {}
