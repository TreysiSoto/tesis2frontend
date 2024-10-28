import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios-trabajador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentarios-trabajador.component.html',
  styleUrl: './comentarios-trabajador.component.css'
})
export class ComentariosTrabajadorComponent {
  comentarios: any[] = [];

}
