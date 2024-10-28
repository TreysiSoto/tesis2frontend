import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', Validators.required]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;

      this.http.post('http://127.0.0.1:8000/registro/', registerData).subscribe({
        next: (response: any) => {
          console.log('Registro exitoso', response);
          if (response.rol === 'trabajador') {
            this.router.navigate(['/dashboard/perfil-trabajador']);
          } else if (response.rol === 'empleador') {
            this.router.navigate(['/dashboard2/perfil-empleador']);
          }
        },
        error: (error) => {
          console.error('Error en el registro', error);
          this.errorMessage = 'Error en el registro. Inténtalo de nuevo.';
        }
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
    }
  }
}
