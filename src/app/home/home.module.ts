import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { AuthPage } from '../auth/auth.page';
import { Ng2OdometerModule } from 'ng2-odometer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2OdometerModule,
    Ng2OdometerModule.forRoot()
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
