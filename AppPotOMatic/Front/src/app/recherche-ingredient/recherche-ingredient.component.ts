import { Component, OnInit } from '@angular/core';
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
export class RechercheIngredientComponent implements OnInit {
  ingredients: Ingredient[] = [];
  searchQuery: string = '';

  constructor(private apiService: ApiService, private ingredientService: IngredientService) {}
  ngOnInit(): void {
    this.ingredientService.emptySelectedIngredients();
  }

  loadIngredients(query: string) {
    if (!query.trim()) {
      this.ingredients = [];
      return;
    }
  
    this.apiService.getIngredients(query).subscribe(
      (data) => {
        if (data.foods && data.foods.food) {
          const uniqueIngredients = new Map();
  
          data.foods.food.forEach((food: any) => {
            const name = food.food_name.trim();
            if (!uniqueIngredients.has(name)) {
              uniqueIngredients.set(name, {
                id: uniqueIngredients.size + 1, // Ensure unique ID
                name: name,
                quantity: 0,
              });
            }
          });
  
          this.ingredients = Array.from(uniqueIngredients.values());
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
