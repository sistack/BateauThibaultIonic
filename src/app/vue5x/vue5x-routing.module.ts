import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue5xPage } from './vue5x.page';

const routes: Routes = [
  {
    path: '',
    component: Vue5xPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue5xPageRoutingModule {}
