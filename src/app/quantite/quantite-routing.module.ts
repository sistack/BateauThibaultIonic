import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuantitePage } from './quantite.page';

const routes: Routes = [
  {
    path: '',
    component: QuantitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuantitePageRoutingModule {}
