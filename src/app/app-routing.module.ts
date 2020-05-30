import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-depense',
    loadChildren: () => import('./add-depense/add-depense.module').then( m => m.AddDepensePageModule)
  },
  {
    path: 'depense',
    loadChildren: () => import('./depense/depense.module').then( m => m.DepensePageModule)
  },
  {
    path: 'depense-today',
    loadChildren: () => import('./depense-today/depense-today.module').then( m => m.DepenseTodayPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
