import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue41PageRoutingModule } from './vue41-routing.module';

import { Vue41Page } from './vue41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue41PageRoutingModule
  ],
  declarations: [Vue41Page]
})
export class Vue41PageModule {}
