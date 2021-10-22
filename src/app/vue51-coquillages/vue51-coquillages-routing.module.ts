import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue51CoquillagesPage } from './vue51-coquillages.page';

const routes: Routes = [
  {
    path: '',
    component: Vue51CoquillagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue51CoquillagesPageRoutingModule {}
