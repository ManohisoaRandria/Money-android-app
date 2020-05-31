import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-depense',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./add-depense/add-depense.module').then( m => m.AddDepensePageModule)
  },
  {
    path: 'depense',
    loadChildren: () => import('./depense/depense.module').then( m => m.DepensePageModule)
  },
  {
    path: 'depense-today',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./depense-today/depense-today.module').then( m => m.DepenseTodayPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'credit',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./credit/credit.module').then( m => m.CreditPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
