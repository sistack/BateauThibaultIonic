import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue1PageRoutingModule } from './vue1-routing.module';

import { Vue1Page } from './vue1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue1PageRoutingModule
  ],
  declarations: [Vue1Page]
})
export class Vue1PageModule {}
