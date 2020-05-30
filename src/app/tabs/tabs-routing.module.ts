import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'credit',
        loadChildren: () => import('../credit/credit.module').then( m => m.CreditPageModule)
      },
      {
        path: 'add-depense',
        loadChildren: () => import('../add-depense/add-depense.module').then( m => m.AddDepensePageModule)
      },
      {
        path: 'depense',
        loadChildren: () => import('../depense/depense.module').then( m => m.DepensePageModule)
      },
      {
        path: 'depense-today',
        loadChildren: () => import('../depense-today/depense-today.module').then( m => m.DepenseTodayPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
