import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue5xPageRoutingModule } from './vue5x-routing.module';

import { Vue5xPage } from './vue5x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue5xPageRoutingModule
  ],
  declarations: [Vue5xPage]
})
export class Vue5xPageModule {}
