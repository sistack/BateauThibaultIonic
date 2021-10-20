import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-vue4',
  templateUrl: './vue4.page.html',
  styleUrls: ['./vue4.page.scss'],
})
export class Vue4Page implements OnInit {

  constructor(private router : Router) { }
 
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
  }
  onLoadRecette(recette: {name: string, description : string[], image: string}){
    let navigationExtras : NavigationExtras = {
      state: {recette: recette }
    };
    this.router.navigate(['/vue4x'],navigationExtras);
  }

}