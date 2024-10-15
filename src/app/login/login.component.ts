import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  newEmail: string = ''; // Para registro
  newPassword: string = ''; // Para registro
  forgotEmail: string = ''; // Para recuperación de contraseña

  constructor(private apiService: ApiService) {}

  loginForm() {
    this.apiService.login(this.email, this.password).subscribe(
      (response) => {
        // Manejar el éxito de inicio de sesión
        console.log('Login exitoso:', response);
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }

  registerRegister() {
    this.apiService.register(this.newEmail, this.newPassword).subscribe(
      (response) => {
        // Manejar el éxito del registro
        console.log('Registro exitoso:', response);
      },
      (error) => {
        console.error('Error en el registro:', error);
      }
    );
  }

  forgotPassword() {
    this.apiService.forgotPassword(this.forgotEmail).subscribe(
      (response) => {
        // Manejar la respuesta de recuperación de contraseña
        console.log('Correo de recuperación enviado:', response);
      },
      (error) => {
        console.error('Error en la recuperación de contraseña:', error);
      }
    );
  }
}
