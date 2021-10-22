import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private router : Router) {}

  //Vue1 : Contact
  onGoToContact(){
    this.router.navigate(['/vue1']);
  }
  //Vue2 : Bateaux
  onGoToBateaux(){
    this.router.navigate(['/vue2']);
  }
  //onGoTo Vue3 : Restaurants
  onGoToRestaurants(){
    this.router.navigate(['/vue3']);
  }
  //onGoTo Vue4 : Recettes
  onGoToRecettes(){
    this.router.navigate(['/vue4']);
  }
  //onGoTo Vue5 : Produits
  onGoToProduits(){
    this.router.navigate(['/vue5']);//produits
  }


}
