import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue42PageRoutingModule } from './vue42-routing.module';

import { Vue42Page } from './vue42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue42PageRoutingModule
  ],
  declarations: [Vue42Page]
})
export class Vue42PageModule {}
