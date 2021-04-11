import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/common/guards/auth-guard.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuardGuard],
    children:[
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'wishList',
        loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
