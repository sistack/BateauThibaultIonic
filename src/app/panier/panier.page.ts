import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  [x: string]: any;
  data: any
  fichier: any[];
  list: any;
  constructor(public connexion: ProduitService, private router:Router) { let myMap = new Map(); }


  ngOnInit() {
    this.fichier = this.getListe();

    this.data = this.fichier
    console.log(typeof this.fichier, "Le type de fichier panierrrr : ", this.fichier)
    fetch(JSON.stringify(this.fichier)
    ).then(res => res.json()).then(json => { this.data = json; });
  }

  getListe() {
    //this.fichier = this.connexion.getListe();
    //console.log("Dans panier: ",this.fichier);
    return this.connexion.getListe();
  }
  onLoadQuantity() {
    //this.list = this.getListe();
    //for (let i = 0; i < this.list.lenght; i++) {
    //  this.map[i] = this.list[i];
    //  console.log(this.map[i]);
    //let navigationExtras: NavigationExtras = {
    //  state: {
    //    list: this.list
    //  }
    //};
    this.router.navigate(['/quantite'])

  }
  

}
