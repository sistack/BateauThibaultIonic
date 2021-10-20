import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue43PageRoutingModule } from './vue43-routing.module';

import { Vue43Page } from './vue43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue43PageRoutingModule
  ],
  declarations: [Vue43Page]
})
export class Vue43PageModule {}
