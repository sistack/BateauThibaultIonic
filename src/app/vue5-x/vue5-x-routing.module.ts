import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue5XPage } from './vue5-x.page';

const routes: Routes = [
  {
    path: '',
    component: Vue5XPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue5XPageRoutingModule {}
