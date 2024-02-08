import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortsPage } from './shorts.page';

const routes: Routes = [
  {
    path: '',
    component: ShortsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortsPageRoutingModule {}
