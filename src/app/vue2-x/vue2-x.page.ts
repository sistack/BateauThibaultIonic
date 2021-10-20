import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vue2-x',
  templateUrl: './vue2-x.page.html',
  styleUrls: ['./vue2-x.page.scss'],
})

export class Vue2XPage implements OnInit {

  bateauName: any;
  bateau: {
    name: string,
    image: string
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.bateau = this.router.getCurrentNavigation().extras.state.bateau;
        console.log(this.bateau);
      }
    });
  }

  ngOnInit() {
  }

}

