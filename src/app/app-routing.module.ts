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
    path: 'vue1',
    loadChildren: () => import('./vue1/vue1.module').then( m => m.Vue1PageModule)
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
    path: 'vue4x',
    loadChildren: () => import('./vue4x/vue4x.module').then( m => m.Vue4xPageModule)
  },
  {
    path: 'vue5',
    loadChildren: () => import('./vue5/vue5.module').then( m => m.Vue5PageModule)
  },
  {
    path: 'vue5x',
    loadChildren: () => import('./vue5x/vue5x.module').then( m => m.Vue5xPageModule)
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
