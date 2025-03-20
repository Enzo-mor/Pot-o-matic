import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Fournit le service globalement
})
export class ApiService {
  private baseUrl = 'http://localhost:3080/api'; // URL du serveur Node.js

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les aliments
  getIngredients(query: string): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3080/api/ingredients?q=${query}`
    );
  }
}
