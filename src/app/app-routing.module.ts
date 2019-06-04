import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './pages/auth/auth.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from './auth.guard';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Dashboard',
      roles: ['ROLE_ADMIN']
    },
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {
      title: 'Dashboard',
      roles: ['ROLE_ADMIN']
    },
    canActivate: [AuthGuard],

  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
