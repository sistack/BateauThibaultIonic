import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue52CrustacePage } from './vue52-crustace.page';

const routes: Routes = [
  {
    path: '',
    component: Vue52CrustacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue52CrustacePageRoutingModule {}
