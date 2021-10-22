import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-quantite',
  templateUrl: './quantite.page.html',
  styleUrls: ['./quantite.page.scss'],
})
export class QuantitePage implements OnInit {

  constructor(private router:Router) { let myMap = new Map(); }

  ngOnInit() {
  }
  //select = (e) => {
  //  let i = e.target.value;
  //  if (i > 1) {
  //    for (let i = 0; i < this.liste; i++) {
  //      this.router.params.subscribe
  //    }
  //    myMap[]
  //  } 
   
  //}
}
