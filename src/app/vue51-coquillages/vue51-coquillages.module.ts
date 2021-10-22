import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue51CoquillagesPageRoutingModule } from './vue51-coquillages-routing.module';

import { Vue51CoquillagesPage } from './vue51-coquillages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue51CoquillagesPageRoutingModule
  ],
  declarations: [Vue51CoquillagesPage]
})
export class Vue51CoquillagesPageModule {}
