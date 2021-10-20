import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue4PageRoutingModule } from './vue4-routing.module';

import { Vue4Page } from './vue4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue4PageRoutingModule
  ],
  declarations: [Vue4Page]
})
export class Vue4PageModule {}
