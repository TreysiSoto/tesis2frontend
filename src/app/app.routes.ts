import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Para formularios
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';

// Definición de rutas
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

// Módulo de la aplicación
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // Para usar ngModel en formularios
    RouterModule.forRoot(routes), // Configura el enrutamiento
  ],
})
export class AppModule {}
