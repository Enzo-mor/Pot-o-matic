import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environement/environement';

@Injectable({
  providedIn: 'root', // Fournit le service globalement
})
export class ApiService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // Récupérer les aliments avec FatSecret
  getIngredients(query: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/ingredients?q=${query}`
    );
  }

  // Récupérer les recettes avec FatSecret
  getRecipes(query: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/recipes?q=${query}` // Appelle la route API pour récupérer les recettes
    );
  }
  // Récupérer les détails d'une recette via l'ID avec FatSecret
  getRecipeDetails(recipeId: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/recipes/${recipeId}` // Utilisation de baseUrl pour récupérer la recette par ID
    );
  }

  // Rechercher une ville avec Nominatim
  searchCity(city: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search-city?city=${city}`);
  }

  // Récupérer les supermarchés via Overpass API
  getSupermarkets(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/supermarkets?lat=${lat}&lon=${lon}`
    );
  }
}
