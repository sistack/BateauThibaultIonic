import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue3PageRoutingModule } from './vue3-routing.module';

import { Vue3Page } from './vue3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue3PageRoutingModule
  ],
  declarations: [Vue3Page]
})
export class Vue3PageModule {}
