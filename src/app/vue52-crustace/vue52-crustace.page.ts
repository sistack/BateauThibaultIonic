import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-vue52-crustace',
  templateUrl: './vue52-crustace.page.html',
  styleUrls: ['./vue52-crustace.page.scss'],
})
export class Vue52CrustacePage implements OnInit {

  fichier;
  liste = [];

  constructor(public connexion: ProduitService) {
  }

  ngOnInit() {
    this.affichage()
  }
  affichage() {
    this.connexion.getFichier().subscribe((res) => {
      this.fichier = res;
      console.log("Dans coquillage", this.fichier.produit);
      console.log(typeof this.fichier)
      for (let i of this.fichier.produit) {
        if (i.category === 2) {
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

}
