import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue40Page } from './vue40.page';

const routes: Routes = [
  {
    path: '',
    component: Vue40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue40PageRoutingModule {}
