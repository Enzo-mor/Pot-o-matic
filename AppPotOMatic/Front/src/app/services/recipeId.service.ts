import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeIdService {
    private recipeIdSubject = new BehaviorSubject<number | null>(null); // On initialise avec `null` pour le type number
    recipeId$ = this.recipeIdSubject.asObservable(); // Observable pour écouter les changements
  
    // Méthode pour mettre à jour l'ID de la recette
    updateRecipeId(recipeId: number) {
      this.recipeIdSubject.next(recipeId); // Met à jour l'ID de la recette
    }
  
    // Méthode pour obtenir l'ID de la recette courante
    getSelectedRecipeId(): number | null {
      return this.recipeIdSubject.getValue(); // Retourne l'ID actuel de la recette
    }
  }