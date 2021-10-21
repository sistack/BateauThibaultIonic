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
    path: 'vue4',
    loadChildren: () => import('./vue4/vue4.module').then( m => m.Vue4PageModule)
  },

  {
    path: 'vue4x',
    loadChildren: () => import('./vue4x/vue4x.module').then( m => m.Vue4xPageModule)
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
