import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

=======
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from '../produit.service';
import { map } from 'rxjs/internal/operators/map';
import { JsonPipe } from '@angular/common';
>>>>>>> b29be40f22f05cbb660d672aa529877abd37e2da
@Component({
  selector: 'app-vue5',
  templateUrl: './vue5.page.html',
  styleUrls: ['./vue5.page.scss'],
})
export class Vue5Page implements OnInit {
<<<<<<< HEAD


  data: any;

  constructor(public http: HttpClient, private router: Router) { }
 
  recettesList = [ { name:'Homard en chaud froid',
                    description : [ 'Faites cuire les homards dans l\'eau bouillante avec du thym, du laurier, du sel et du poivre de Cayenne. Laisser cuire 20 minutes. Egouttez-les et laisser-les refroidir. Découpez les coffres des homards dans le sens de la longueur. Mélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée.']
                    , image : './././assets/icon/Vue40.png'  
                  }, 
                    {name:'Noix de Saint Jacques flambées au Cognac',
                      description : [ 'Faire fondre du beurre avec des échalottes puis ajouter les noix de Saint Jacques. Les faire revenir en laissant le milieu translucide puis les retirer du feu. Ajouter l\'ail et le persil dans la poêle et laisser cuire quelques secondes. Bien faire chauffer la poêle, puis flamber au Cognac. Une fois la flemme éteinte, ajouter les noix de Saint-Jacques (il ne faut pas les flamber car elles perdraient leur saveur. Déguster chaud nature ou accompagné d\'une fondu de poireaux.'], 
                      image : './././assets/icon/Vue41.png'  
                    }, 
                    { name:'Bar rôti au laurier frais',
                      description : [ 'Sur une plaque ou un plat allant au four, disposer quelques feuilles de laurier frais, verser un filet d\'huile d\'olive et du gros sel. Disposer le bar, puis l\'arroser d\'un filet d\'huile d\'olive et mettre un peu de gros sel sur la peau. Cuire au four pendant 12 min à 240°C.']
                      , image : './././assets/icon/Vue42.png'  
                    },
                      {name:'Tourteau linguine',
                        description : [ 'Sur une plaque ou un plat allant au four, disposer quelques feuilles de laurier frais, verser un filet d\'huile d\'olive et du gros sel. Disposer le bar, puis l\'arroser d\'un filet d\'huile d\'olive et mettre un peu de gros sel sur la peau. Cuire au four pendant 12 min à 240°C.'],
                         image : './././assets/icon/Vue43.png'  
                      }]
  
  ngOnInit() {
    //this.getData();
  }
  /*
  getData() {
    this.http.get('assets/data/menu1.json').map(res => res.json()).subscribe(res => {
          this.data = res.menuItems;
          console.log(this.data);
        },
        (err) => {
          alert('failed loading json data');
        });
  }*/

  onLoadRecette(recette: {name: string, description : string[], image: string}){
    let navigationExtras : NavigationExtras = {
      state: {recette: recette }
    };
    this.router.navigate(['/vue4x'],navigationExtras);
  }

}
=======
   
  
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
>>>>>>> b29be40f22f05cbb660d672aa529877abd37e2da
