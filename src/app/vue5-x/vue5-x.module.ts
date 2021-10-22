import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue5XPageRoutingModule } from './vue5-x-routing.module';

import { Vue5XPage } from './vue5-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue5XPageRoutingModule
  ],
  declarations: [Vue5XPage]
})
export class Vue5XPageModule {}
