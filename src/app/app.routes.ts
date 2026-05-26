import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    title: 'Inicio'
  },
  {
    path: 'servicios',
    loadComponent: () => import('./components/servicios/servicios.component').then(m => m.ServiciosComponent),
    title: 'Servicios'
  },
  {
    path: 'armamento',
    loadComponent: () => import('./components/armamento/armamento.component').then(m => m.ArmamentoComponent),
    title: 'Armamento y Equipo'
  },
  {
    path: 'certificaciones',
    loadComponent: () => import('./components/certificaciones/certificaciones.component').then(m => m.CertificacionesComponent),
    title: 'Certificaciones'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./components/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Contacto'
  },
  {
    path: 'clientes',
    loadComponent: () => import('./components/clientes/clientes.component').then(m => m.ClientesComponent),
    title: 'Clientes'
  },
  {
    path: 'entidades',
    loadComponent: () => import('./components/entidades/entidades.component').then(m => m.EntidadesComponent),
    title: 'Entidades Reguladoras'
  },
  {
    path: 'not-found',
    loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Página no encontrada'
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
