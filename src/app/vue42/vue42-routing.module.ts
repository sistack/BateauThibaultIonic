import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue42Page } from './vue42.page';

const routes: Routes = [
  {
    path: '',
    component: Vue42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue42PageRoutingModule {}
