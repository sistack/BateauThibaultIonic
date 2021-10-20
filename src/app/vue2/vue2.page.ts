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
    {name: 'De la Brise', image: '../assets/deLaBrise.png'}, 
    {name: 'Saphir', image: '../assets/saphir.png'},
    {name: 'Gast Micher', image: '../assets/gastMicher.png'},
    {name: 'Aquilon', image: '../assets/aquilon.png'}
  ];

  ngOnInit() {
  }

  onLoadBateau(bateau: {name: String, image: String}) {
    let navigationExtras: NavigationExtras = {
      state: {bateau: bateau}
    }
    this.router.navigate(['/vue2-x'], navigationExtras);
  };

}
