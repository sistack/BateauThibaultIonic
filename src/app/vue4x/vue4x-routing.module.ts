import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue4xPage } from './vue4x.page';

const routes: Routes = [
  {
    path: '',
    component: Vue4xPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue4xPageRoutingModule {}
