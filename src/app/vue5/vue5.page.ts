import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from '../produit.service';
import { map } from 'rxjs/internal/operators/map';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-vue5',
  templateUrl: './vue5.page.html',
  styleUrls: ['./vue5.page.scss'],
})
export class Vue5Page implements OnInit {
   
  
  data = [{ id: 1, name: "Poissons" }, { id: 2, name: "Coquillages" }, { id: 3, name: "Crustacés" }, { id: 4, name: "Promotions" },]
  constructor(private router: Router, http: HttpClient, public connexion: ProduitService) { }
  fichier;
  liste = [];

  
  ngOnInit() {
    this.affichage()
  }
  affichage() {
    this.connexion.getFichier().subscribe((res) => {
      this.fichier = res;
      //console.log(res);
      //for (let i of this.fichier) {
      //  if (i.category === 0) {
      //    this.liste.push(i)
      //  }
      //}
      console.log(this.liste)
    })
  }



  add(element) {
    if (!this.connexion.isInList(element)) {
      this.connexion.addList(element);
    }
    else {
      this.connexion.removeList(element);
    }
  }
  onLoadProduits(produits: { name: string }) {
    let navigationExtras: NavigationExtras = {
      state: {
        produit: produits,
        item: this.affichage

      }
    }; if (produits.name === "Poissons") {
      this.router.navigate(['/vue5-x'], navigationExtras);
    }
    if (produits.name === "Coquillages") {
      this.router.navigate(['/vue51-coquillages'], navigationExtras);
    }
    if (produits.name === "Crustacés") {
      this.router.navigate(['/vue52-crustace'], navigationExtras);
    }
    if (produits.name === "Promotions") {
      this.router.navigate(['/vue52-promo'], navigationExtras);
    }
        
    
  }

}
