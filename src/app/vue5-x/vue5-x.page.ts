import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { ProduitService } from '../service/produit.service';
import { ProduitService } from '../produit.service';
import { map } from 'rxjs/internal/operators/map';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-vue5-x',
  templateUrl: './vue5-x.page.html',
  styleUrls: ['./vue5-x.page.scss'],
})
export class Vue5XPage implements OnInit {
  
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
      //console.log(this.fichier.produit);
      console.log(typeof this.fichier)
      for (let i of this.fichier.produit) {
        if (i.category === 0) {
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

