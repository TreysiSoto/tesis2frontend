import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { RecuperarComponent } from './authentication/recuperar/recuperar/recuperar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicacionesTrabajadorComponent } from './trabajador/publicaciones-trabajador/publicaciones-trabajador.component';
import { ComentariosTrabajadorComponent } from './trabajador/comentarios-trabajador/comentarios-trabajador.component';
import { PublicacionesEmpleadorComponent } from './empleador/publicaciones-empleador/publicaciones-empleador.component';
import { ComentariosEmpleadorComponent } from './empleador/comentarios-empleador/comentarios-empleador.component';
import { PerfilTrabajadorComponent } from './trabajador/perfil-trabajador/perfil-trabajador.component'
import { PerfilEmpleadorComponent } from './empleador/perfil-empleador/perfil-empleador.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'recuperar', component: RecuperarComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'perfil-trabajador', component: PerfilTrabajadorComponent },
      { path: 'publicaciones-trabajador', component: PublicacionesTrabajadorComponent },
      { path: 'comentarios-trabajador', component: ComentariosTrabajadorComponent },
  ]},
  { path: 'dashboard2', component: DashboardComponent, children: [
      { path: 'perfil-empleador', component: PerfilEmpleadorComponent },
      { path: 'publicaciones-empleador', component: PublicacionesEmpleadorComponent },
      { path: 'comentarios-empleador', component: ComentariosEmpleadorComponent }
    ] 
  },
  { path: '**', redirectTo: '' }
];
