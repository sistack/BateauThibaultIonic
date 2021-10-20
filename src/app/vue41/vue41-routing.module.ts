import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue41Page } from './vue41.page';

const routes: Routes = [
  {
    path: '',
    component: Vue41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue41PageRoutingModule {}
