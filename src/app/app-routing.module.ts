import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  //{ path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),canActivate: [CanActivateGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
