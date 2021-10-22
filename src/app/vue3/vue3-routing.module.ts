import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue3Page } from './vue3.page';

const routes: Routes = [
  {
    path: '',
    component: Vue3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue3PageRoutingModule {}
