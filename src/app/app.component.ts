import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  standalone: true,
  imports: [RouterOutlet], // Importa RouterOutlet para la navegación
})
export class AppComponent {
  title = 'Tu Título Aquí'; // Define el título de la aplicación

  constructor(private router: Router) {} // Inyección del servicio Router

  isLoginPage(): boolean {
    return this.router.url === '/login'; // Verifica si la URL actual es la de login
  }
}

