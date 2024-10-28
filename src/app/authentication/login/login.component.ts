import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    
    if (this.loginForm.valid) {
      this.http.post('http://127.0.0.1:8000/login/', this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Login exitoso', response);
          if (response.rol) {
            localStorage.setItem('rol', response.rol);
            localStorage.setItem('token', response.token); // Asumiendo que el backend envía un token
          }
          this.router.navigate([response.rol === 'trabajador' ? '/dashboard/perfil-trabajador' : '/dashboard2/perfil-empleador']);
        },
        error: (error) => {
          console.error('Error en el login', error);
          this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
        }
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
    }
  }
}