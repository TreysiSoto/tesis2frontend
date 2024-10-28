import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publicaciones-empleador',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './publicaciones-empleador.component.html',
  styleUrl: './publicaciones-empleador.component.css'
})
export class PublicacionesEmpleadorComponent {

}
