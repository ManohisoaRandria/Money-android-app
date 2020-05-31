import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

import { LoginComponent } from '../component/login/login.component';
import { InscriptionComponent } from '../component/inscription/inscription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
  ],
  declarations: [AuthPage,
    LoginComponent,
    InscriptionComponent
  ]
})
export class AuthPageModule {}
