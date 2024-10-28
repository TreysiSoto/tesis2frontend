import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../../models/trabajador';
import { TrabajadorService } from '../../../services/trabajador.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-trabajador',  
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './perfil-trabajador.component.html',
  styleUrls: ['./perfil-trabajador.component.css']
})
export class PerfilTrabajadorComponent implements OnInit {
  trabajador: Trabajador;
  error: string = '';
  loading: boolean = false;

  constructor(private trabajadorService: TrabajadorService) { }

  ngOnInit(): void {
    this.cargarDatosTrabajador();
  }

  cargarDatosTrabajador(): void {
    this.loading = true;
    // Aquí debes poner el ID del trabajador que quieres mostrar
    const trabajadorId = 1; // Este ID deberías obtenerlo de tu sistema de autenticación
    
    this.trabajadorService.obtenerTrabajador(trabajadorId)
      .subscribe({
        next: (data) => {
          this.trabajador = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = error.message;
          this.loading = false;
        }
      });
  }


  editarPerfil(): void {
    // Aquí puedes implementar la lógica para editar el perfil
    console.log('Editar perfil');
  }

}
