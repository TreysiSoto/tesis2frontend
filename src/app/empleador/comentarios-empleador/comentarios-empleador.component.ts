import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comentarios-empleador',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './comentarios-empleador.component.html',
  styleUrl: './comentarios-empleador.component.css'
})
export class ComentariosEmpleadorComponent {

}
