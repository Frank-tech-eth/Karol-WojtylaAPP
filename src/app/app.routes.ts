import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
  {
    path: 'datos',
    loadComponent: () => import('./datos/datos.page').then( m => m.DatosPage)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];
