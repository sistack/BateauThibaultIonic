import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vue3x',
  templateUrl: './vue3x.page.html',
  styleUrls: ['./vue3x.page.scss'],
})
export class Vue3xPage implements OnInit {


  recetteName: any;
  recette: {
    name: string,
    image: string
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.recette = this.router.getCurrentNavigation().extras.state.recette;
        console.log(this.recette);
      }
    });
  }


  ngOnInit() {
  }

}
