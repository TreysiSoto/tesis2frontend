import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root' // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class ApiService {
  private ApiUrl = "http://127.0.0.1:8000/api/"; // Cambia esto a tu URL base

  constructor(private http: HttpClient) {}

  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.ApiUrl}/${endpoint}`, data);
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.ApiUrl}/login`, { email, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.ApiUrl}/register`, { email, password });
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.ApiUrl}/forgot-password`, { email });
  }
}