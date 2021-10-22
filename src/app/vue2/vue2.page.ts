import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-vue2',
  templateUrl: './vue2.page.html',
  styleUrls: ['./vue2.page.scss'],
})
export class Vue2Page implements OnInit {

  constructor(private router: Router) { }

  bateauxList = [
    {name: 'De la Brise', image: '../assets/deLaBrise.png', description:'Qu\'il est chaud le soleil \n Quand nous somme en vacances \n y\'a de la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n Que du bonheur!\n Que de bonheur!'}, 
    {name: 'Saphir', image: '../assets/saphir.png', description:'Qu\'il est chaud le soleil \n Quand nous somme en vacances \n y\'a de la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n Que du bonheur!\n Que de bonheur!'},
    {name: 'Gast Micher', image: '../assets/gastMicher.png', description:'Qu\'il est chaud le soleil \n Quand nous somme en vacances \n y\'a de la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n Que du bonheur!\n Que de bonheur!'},
    {name: 'Aquilon', image: '../assets/aquilon.png', description:'Qu\'il est chaud le soleil \n Quand nous somme en vacances \n y\'a de la joie, des hirondelles \n C\'est le sud de la France \n Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n Que du bonheur!\n Que de bonheur!'},
  ];

  ngOnInit() {
  }

  onLoadBateau(bateau: {name: String, image: String, description: String}) {
    let navigationExtras: NavigationExtras = {
      state: {bateau: bateau}
    }
    this.router.navigate(['/vue2-x'], navigationExtras);
  };

}
