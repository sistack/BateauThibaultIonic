import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue5PageRoutingModule } from './vue5-routing.module';

import { Vue5Page } from './vue5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue5PageRoutingModule
  ],
  declarations: [Vue5Page]
})
export class Vue5PageModule {}
