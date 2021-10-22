import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vue4',
    loadChildren: () => import('./vue4/vue4.module').then(m => m.Vue4PageModule)
  },
  {
    path: 'vue4-x',
    loadChildren: () => import('./vue4x/vue4x.module').then(m => m.Vue4xPageModule)
  },
  {
    path: 'vue5',
    loadChildren: () => import('./vue5/vue5.module').then(m => m.Vue5PageModule)
  },
  {
    path: 'vue5-x',
    loadChildren: () => import('./vue5-x/vue5-x.module').then(m => m.Vue5XPageModule)
  },
  {
    path: 'vue51-coquillages',
    loadChildren: () => import('./vue51-coquillages/vue51-coquillages.module').then(m => m.Vue51CoquillagesPageModule)
  },
  {
    path: 'vue52-crustace',
    loadChildren: () => import('./vue52-crustace/vue52-crustace.module').then(m => m.Vue52CrustacePageModule)
  },
  {
    path: 'vue52-promo',
    loadChildren: () => import('./vue52-promo/vue52-promo.module').then(m => m.Vue52PromoPageModule)
  },
  {
    path: 'vue1',
    loadChildren: () => import('./vue1/vue1.module').then(m => m.Vue1PageModule)
  },
  {
    path: 'vue2',
    loadChildren: () => import('./vue2/vue2.module').then(m => m.Vue2PageModule)
  },
  {
    path: 'vue2-x',
    loadChildren: () => import('./vue2-x/vue2-x.module').then(m => m.Vue2XPageModule)
  },
  {
    path: 'vue4',
    loadChildren: () => import('./vue4/vue4.module').then(m => m.Vue4PageModule)
  },

  {
    path: 'vue4x',
    loadChildren: () => import('./vue4x/vue4x.module').then(m => m.Vue4xPageModule)
  },
  {
    path: 'vue5',
    loadChildren: () => import('./vue5/vue5.module').then(m => m.Vue5PageModule)
  },
  {
    path: 'vue5x',
    loadChildren: () => import('./vue5x/vue5x.module').then(m => m.Vue5xPageModule)

  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then(m => m.PanierPageModule)
  },
  {
    path: 'quantite',
    loadChildren: () => import('./quantite/quantite.module').then(m => m.QuantitePageModule)
  },
  {
    path: 'vue3',
    loadChildren: () => import('./vue3/vue3.module').then( m => m.Vue3PageModule)
  },
  {
    path: 'vue3x',
    loadChildren: () => import('./vue3x/vue3x.module').then( m => m.Vue3xPageModule)
  },

];

@NgModule({
  imports: [

    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

