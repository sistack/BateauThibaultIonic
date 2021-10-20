import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue4XPage } from './vue4-x.page';

const routes: Routes = [
  {
    path: '',
    component: Vue4XPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue4XPageRoutingModule {}
