import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private selectedIngredients = new BehaviorSubject<any[]>([]);
  selectedIngredients$ = this.selectedIngredients.asObservable();

  updateIngredients(ingredients: any[]) {
    this.selectedIngredients.next(ingredients);
  }

  getSelectedIngredients(): any[] {
    return this.selectedIngredients.getValue();
  }
}
