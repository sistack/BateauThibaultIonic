import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue3xPage } from './vue3x.page';

const routes: Routes = [
  {
    path: '',
    component: Vue3xPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue3xPageRoutingModule {}
