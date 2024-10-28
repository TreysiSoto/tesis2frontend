import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publicaciones-trabajador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publicaciones-trabajador.component.html',
  styleUrl: './publicaciones-trabajador.component.css'
})
export class PublicacionesTrabajadorComponent {
  publicaciones: any[] = [];

}
