import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vue52CrustacePageRoutingModule } from './vue52-crustace-routing.module';

import { Vue52CrustacePage } from './vue52-crustace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vue52CrustacePageRoutingModule
  ],
  declarations: [Vue52CrustacePage]
})
export class Vue52CrustacePageModule {}
