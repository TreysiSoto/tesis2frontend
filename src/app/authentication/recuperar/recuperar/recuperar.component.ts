import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  correoForm: FormGroup;
  message: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService // Inyecta tu ApiService
  ) {
    this.correoForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    const correo = this.correoForm.get('correo')?.value;

    this.apiService.recuperar(correo).subscribe({
      next: () => {
        this.message = 'Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico.';
        this.errorMessage = null;
      },
      error: () => {
        this.errorMessage = 'Hubo un problema al enviar el enlace. Inténtalo de nuevo.';
        this.message = null;
      }
    });
  }
}
