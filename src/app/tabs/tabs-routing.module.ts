import { AuthGuardService } from './../services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        canActivate:[AuthGuardService],
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'credit',
        canActivate:[AuthGuardService],
        loadChildren: () => import('../credit/credit.module').then( m => m.CreditPageModule)
      },
      {
        path: 'add-depense',
        canActivate:[AuthGuardService],
        loadChildren: () => import('../add-depense/add-depense.module').then( m => m.AddDepensePageModule)
      },
      {
        path: 'depense',
        canActivate:[AuthGuardService],
        loadChildren: () => import('../depense/depense.module').then( m => m.DepensePageModule)
      },
      {
        path: 'depense-today',
        canActivate:[AuthGuardService],
        loadChildren: () => import('../depense-today/depense-today.module').then( m => m.DepenseTodayPageModule)
      }, 
      {
        path: 'auth',
        canActivate:[AuthGuardService],
        loadChildren: () => import('../auth/auth.module').then( m => m.AuthPageModule)
      },
      {
        path: '',
        redirectTo:'/tabs/home',
        pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
