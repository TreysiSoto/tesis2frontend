import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-empleador',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './perfil-empleador.component.html',
  styleUrl: './perfil-empleador.component.css'
})
export class PerfilEmpleadorComponent {

}
