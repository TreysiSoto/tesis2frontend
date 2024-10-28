import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Trabajador } from '../models/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private apiUrl = 'http://127.0.0.1:8000/trabajadores';

  constructor(private http: HttpClient) { }

  obtenerTrabajador(id: number): Observable<Trabajador> {
    return this.http.get<Trabajador>(`${this.apiUrl}/${id}/`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error al cargar los datos del trabajador';
    
    if (error.status === 404) {
      errorMessage = 'No se encontró el trabajador';
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    }
    
    console.error('Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
