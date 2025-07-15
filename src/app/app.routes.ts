import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'citas',
    loadComponent: () => import('./citas/citas.page').then( m => m.CitasPage)
  },
  {
    path: 'interconsultas',
    loadComponent: () => import('./interconsultas/interconsultas.page').then( m => m.InterconsultasPage)
  },
  {
    path: 'agendamiento',
    loadComponent: () => import('./agendamiento/agendamiento.page').then( m => m.AgendamientoPage)
  },
  {
    path: 'recetas',
    loadComponent: () => import('./recetas/recetas.page').then( m => m.RecetasPage)
  },
];
