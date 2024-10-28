import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  // Método genérico para hacer peticiones POST
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, this.getHttpOptions());
  }

  // Método genérico para hacer peticiones GET
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, this.getHttpOptions());
  }

  // Método genérico para hacer peticiones PUT
  putData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data, this.getHttpOptions());
  }

  // Autenticación
  login(email: string, password: string): Observable<any> {
    return this.postData('login', { email, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.postData('register', { email, password });
  }

  recuperar(email: string): Observable<any> {
    return this.postData('recuperar', { email });
  }

}
