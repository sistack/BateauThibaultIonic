import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue40PageRoutingModule } from './vue40-routing.module';

import { Vue40Page } from './vue40.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue40PageRoutingModule
  ],
  declarations: [Vue40Page]
})
export class Vue40PageModule {}
