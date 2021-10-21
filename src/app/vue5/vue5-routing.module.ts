import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vue5Page } from './vue5.page';

const routes: Routes = [
  {
    path: '',
    component: Vue5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vue5PageRoutingModule {}
