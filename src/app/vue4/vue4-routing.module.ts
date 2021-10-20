import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue4Page } from './vue4.page';

const routes: Routes = [
  {
    path: '',
    component: Vue4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue4PageRoutingModule {}
