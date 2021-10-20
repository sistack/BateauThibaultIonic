import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue2Page } from './vue2.page';

const routes: Routes = [
  {
    path: '',
    component: Vue2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue2PageRoutingModule {}
