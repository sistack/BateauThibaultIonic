import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue2PageRoutingModule } from './vue2-routing.module';

import { Vue2Page } from './vue2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue2PageRoutingModule
  ],
  declarations: [Vue2Page]
})
export class Vue2PageModule {}
