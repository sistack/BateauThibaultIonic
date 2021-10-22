import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue52PromoPage } from './vue52-promo.page';

const routes: Routes = [
  {
    path: '',
    component: Vue52PromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue52PromoPageRoutingModule {}
