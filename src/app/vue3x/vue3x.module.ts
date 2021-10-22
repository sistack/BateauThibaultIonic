import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue3xPageRoutingModule } from './vue3x-routing.module';

import { Vue3xPage } from './vue3x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue3xPageRoutingModule
  ],
  declarations: [Vue3xPage]
})
export class Vue3xPageModule {}
