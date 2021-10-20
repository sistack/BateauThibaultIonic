import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vue40',
  templateUrl: './vue40.page.html',
  styleUrls: ['./vue40.page.scss'],
})
export class Vue40Page implements OnInit {

  recetteName : any;
  
  recette : {
    name : string,
    description : string[],
    image: string
  }
  constructor(private route : ActivatedRoute, private router : Router) { 
    this.route.queryParams.subscribe(params => {
        if(this.router.getCurrentNavigation().extras.state){
          this.recette = this.router.getCurrentNavigation()
          .extras.state.recette;
        }
      });
    }


  ngOnInit() {
  }

}
