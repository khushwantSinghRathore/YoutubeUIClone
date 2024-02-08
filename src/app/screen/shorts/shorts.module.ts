import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortsPageRoutingModule } from './shorts-routing.module';

import { ShortsPage } from './shorts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortsPageRoutingModule
  ],
  declarations: [ShortsPage]
})
export class ShortsPageModule {}
