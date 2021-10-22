<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
=======
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
    path: 'vue5',
    loadChildren: () => import('./vue5/vue5.module').then( m => m.Vue5PageModule)
  },
  {
    path: 'vue5-x',
    loadChildren: () => import('./vue5-x/vue5-x.module').then( m => m.Vue5XPageModule)
  },
  {
    path: 'vue51-coquillages',
    loadChildren: () => import('./vue51-coquillages/vue51-coquillages.module').then( m => m.Vue51CoquillagesPageModule)
>>>>>>> b29be40f22f05cbb660d672aa529877abd37e2da
  },
  {
    path: 'vue52-crustace',
    loadChildren: () => import('./vue52-crustace/vue52-crustace.module').then( m => m.Vue52CrustacePageModule)
  },
  {
    path: 'vue52-promo',
    loadChildren: () => import('./vue52-promo/vue52-promo.module').then( m => m.Vue52PromoPageModule)
  },

  {
    path: 'vue4x',
    loadChildren: () => import('./vue4x/vue4x.module').then( m => m.Vue4xPageModule)
  },
  {
<<<<<<< HEAD
    path: 'vue5',
    loadChildren: () => import('./vue5/vue5.module').then( m => m.Vue5PageModule)
  },
  {
    path: 'vue5x',
    loadChildren: () => import('./vue5x/vue5x.module').then( m => m.Vue5xPageModule)
=======
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'quantite',
    loadChildren: () => import('./quantite/quantite.module').then( m => m.QuantitePageModule)
>>>>>>> b29be40f22f05cbb660d672aa529877abd37e2da
  },

<<<<<<< HEAD
@NgModule({
  imports: [  
            CommonModule,
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> b29be40f22f05cbb660d672aa529877abd37e2da
