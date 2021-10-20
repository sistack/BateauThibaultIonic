import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vue4',
    loadChildren: () => import('./vue4/vue4.module').then( m => m.Vue4PageModule)
  },
  {
    path: 'vue4-x',
    loadChildren: () => import('./vue4-x/vue4-x.module').then( m => m.Vue4XPageModule)
  },
  {
    path: 'vue4-x',
    loadChildren: () => import('./vue4-x/vue4-x.module').then( m => m.Vue4XPageModule)
  },  {
    path: 'vue2',
    loadChildren: () => import('./vue2/vue2.module').then( m => m.Vue2PageModule)
  },
  {
    path: 'vue2-x',
    loadChildren: () => import('./vue2-x/vue2-x.module').then( m => m.Vue2XPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
