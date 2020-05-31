import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { LoginComponent } from '../component/login/login.component';
import { InscriptionComponent } from '../component/inscription/inscription.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'inscritpion',
    component:InscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
