import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { map } from 'rxjs/internal/operators/map';
import { JsonPipe } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
//import { PanierPage } from '../produit.service';
@Component({
  selector: 'app-vue51-coquillages',
  templateUrl: './vue51-coquillages.page.html',
  styleUrls: ['./vue51-coquillages.page.scss'],
})
export class Vue51CoquillagesPage implements OnInit {
  fichier;
  liste = [];

  constructor(public connexion: ProduitService,private router:Router) {
  }

  ngOnInit() {
    this.affichage()
  }
  affichage() {
    this.connexion.getFichier().subscribe((res) => {
      this.fichier = res;
      //console.log("Dans coquillage",this.fichier.produit);
      //console.log(typeof this.fichier)
      for (let i of this.fichier.produit) {
        if (i.category === 1) {
          this.liste.push(i)
        }
      }
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
  onLoadPanier() {
    this.router.navigate(['/panier'])
  }

}
