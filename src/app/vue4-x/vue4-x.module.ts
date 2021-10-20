import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue4XPageRoutingModule } from './vue4-x-routing.module';

import { Vue4XPage } from './vue4-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue4XPageRoutingModule
  ],
  declarations: [Vue4XPage]
})
export class Vue4XPageModule {}
