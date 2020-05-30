import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepenseTodayPage } from './depense-today.page';

const routes: Routes = [
  {
    path: '',
    component: DepenseTodayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepenseTodayPageRoutingModule {}
