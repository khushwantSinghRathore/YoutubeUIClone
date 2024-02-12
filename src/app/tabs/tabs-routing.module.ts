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
        loadChildren: () =>
          import('../screen/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'shorts',
        loadChildren: () =>
          import('../screen/shorts/shorts.module').then(
            (m) => m.ShortsPageModule
          ),
      },
      {
        path: 'subscription',
        loadChildren: () =>
          import('../screen/subscription/subscription.module').then(
            (m) => m.SubscriptionPageModule
          ),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('../screen/library/library.module').then(
            (m) => m.LibraryPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
