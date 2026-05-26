import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ArmamentoComponent } from './components/armamento/armamento.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EntidadesComponent } from './components/entidades/entidades.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'armamento', component: ArmamentoComponent },
  { path: 'certificaciones', component: CertificacionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'entidades', component: EntidadesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];