import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue2XPageRoutingModule } from './vue2-x-routing.module';

import { Vue2XPage } from './vue2-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue2XPageRoutingModule
  ],
  declarations: [Vue2XPage]
})
export class Vue2XPageModule {}
