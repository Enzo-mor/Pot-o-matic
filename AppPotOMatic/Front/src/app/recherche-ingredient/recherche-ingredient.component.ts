import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { IngredientService } from '../services/ingredient.service';

interface Ingredient {
  id: number;
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-recherche-ingredient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recherche-ingredient.component.html',
  styleUrls: ['./recherche-ingredient.component.css'],
})
export class RechercheIngredientComponent {
  ingredients: Ingredient[] = [];
  searchQuery: string = '';

  constructor(private apiService: ApiService, private ingredientService: IngredientService) {}

  loadIngredients(query: string) {
    if (!query.trim()) {
      this.ingredients = [];
      return;
    }

    this.apiService.getIngredients(query).subscribe(
      (data) => {
        if (data.foods && data.foods.food) {
          this.ingredients = data.foods.food.map((food: any, index: number) => ({
            id: index + 1,
            name: food.food_name,
            quantity: 0,
          }));
        } else {
          this.ingredients = [];
        }
      },
      (error) => {
        console.error('Erreur API:', error);
      }
    );
  }

  onSearchChange() {
    this.loadIngredients(this.searchQuery);
  }

  decreaseQuantity(ingredient: Ingredient) {
    if (ingredient.quantity > 0) {
      ingredient.quantity--;
      this.updateSelectedIngredients();
    }
  }

  increaseQuantity(ingredient: Ingredient) {
    ingredient.quantity++;
    this.updateSelectedIngredients();
  }

  updateSelectedIngredients() {
    const selected = this.ingredients.filter((ing) => ing.quantity > 0);
    this.ingredientService.updateIngredients(selected);
  }
}
