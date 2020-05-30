import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepenseTodayPageRoutingModule } from './depense-today-routing.module';

import { DepenseTodayPage } from './depense-today.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepenseTodayPageRoutingModule
  ],
  declarations: [DepenseTodayPage]
})
export class DepenseTodayPageModule {}
