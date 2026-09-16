import { Routes } from '@angular/router';
import { Carrinho } from './pages/carrinho/carrinho';
import { Favoritos } from './pages/favoritos/favoritos';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./pages/produtos/produtos').then(m => m.Produtos)
  },
  { 
    path: 'cadastro',
    loadComponent:() =>
      import('./pages/cadastro/cadastro').then(m => m.Cadastro)
  },
  {
    path: 'carrinho',
    component: Carrinho,
    
  },
  {
    path: 'favoritos',
    component: Favoritos,
    
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [adminGuard]
  }
];