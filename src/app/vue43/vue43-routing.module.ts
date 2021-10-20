import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue43Page } from './vue43.page';

const routes: Routes = [
  {
    path: '',
    component: Vue43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue43PageRoutingModule {}
