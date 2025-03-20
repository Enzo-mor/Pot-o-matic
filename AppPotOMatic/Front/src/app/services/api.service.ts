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

  // Méthode pour récupérer les aliments
  getIngredients(query: string): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3080/api/ingredients?q=${query}`
    );
  }

  getRecipes(query: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/recipes?q=${query}` // Appelle la route API pour récupérer les recettes
    );
  }
  // Méthode pour récupérer les détails d'une recette via l'ID
  getRecipeDetails(recipeId: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/recipes/${recipeId}` // Utilisation de baseUrl pour récupérer la recette par ID
    );
  }
}
