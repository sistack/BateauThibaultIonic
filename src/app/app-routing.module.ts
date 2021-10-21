import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    path: 'vue2',
    loadChildren: () => import('./vue2/vue2.module').then( m => m.Vue2PageModule)
  },
  {
    path: 'vue2-x',
    loadChildren: () => import('./vue2-x/vue2-x.module').then( m => m.Vue2XPageModule)
  },

  {
    path: 'vue4',
    loadChildren: () => import('./vue4/vue4.module').then( m => m.Vue4PageModule)
  },
  {
    path: 'vue40',
    loadChildren: () => import('./vue40/vue40.module').then( m => m.Vue40PageModule)
  },
  {
    path: 'vue41',
    loadChildren: () => import('./vue41/vue41.module').then( m => m.Vue41PageModule)
  },
  {
    path: 'vue42',
    loadChildren: () => import('./vue42/vue42.module').then( m => m.Vue42PageModule)
  },
  {
    path: 'vue43',
    loadChildren: () => import('./vue43/vue43.module').then( m => m.Vue43PageModule)
  },
  {
    path: 'vue4',
    loadChildren: () => import('./vue4/vue4.module').then( m => m.Vue4PageModule)
  },
  {
    path: 'vue4x',
    loadChildren: () => import('./vue4x/vue4x.module').then( m => m.Vue4xPageModule)
  },  {
    path: 'vue1',
    loadChildren: () => import('./vue1/vue1.module').then( m => m.Vue1PageModule)
  },

];

@NgModule({
  imports: [  
            CommonModule,
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
