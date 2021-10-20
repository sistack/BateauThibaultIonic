import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vue4x',
  templateUrl: './vue4x.page.html',
  styleUrls: ['./vue4x.page.scss'],
})
export class Vue4xPage implements OnInit {


  recetteName : any;
  
  recette : {
    name : string,
    description : string[],
    image : string
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
