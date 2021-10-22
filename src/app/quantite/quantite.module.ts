import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuantitePageRoutingModule } from './quantite-routing.module';

import { QuantitePage } from './quantite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuantitePageRoutingModule
  ],
  declarations: [QuantitePage]
})
export class QuantitePageModule {}
