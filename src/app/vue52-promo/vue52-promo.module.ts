import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue52PromoPageRoutingModule } from './vue52-promo-routing.module';

import { Vue52PromoPage } from './vue52-promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue52PromoPageRoutingModule
  ],
  declarations: [Vue52PromoPage]
})
export class Vue52PromoPageModule {}
