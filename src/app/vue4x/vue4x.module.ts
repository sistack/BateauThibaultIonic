import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue4xPageRoutingModule } from './vue4x-routing.module';

import { Vue4xPage } from './vue4x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue4xPageRoutingModule
  ],
  declarations: [Vue4xPage]
})
export class Vue4xPageModule {}
