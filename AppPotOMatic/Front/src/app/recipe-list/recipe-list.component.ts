import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ChipModule } from 'primeng/chip';
import { ApiService } from '../services/api.service';
import { IngredientService } from '../services/ingredient.service';
import { Router } from '@angular/router';
import {RecipeIdService} from '../services/recipeId.service';


interface FilterOption {
  name: string;
}

interface Meal {
  id: number;
  name: string;
  category: string;
  calories: number; // in minutes
  image?: string;
}

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, ChipModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  filters: FilterOption[] = []; // Stores selected ingredients
  items: string[] = []; // Autocomplete suggestion list
  value: string = ''; // Stores current input value
  recipes: Meal[] = []; // Stores fetched recipes

  constructor(private apiService: ApiService, private ingredientService: IngredientService, private recipeId : RecipeIdService,private router :Router) {}
  ngOnInit(): void {
    this.loadRecipes();
  }

  /**
   * Filters out selected ingredients from the suggestion list.
   */
  search(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();
    this.items = ['Egg', 'Banana', 'Apple', 'Carrot', 'Tomato'].filter(
      (item) =>
        item.toLowerCase().includes(query) &&
        !this.filters.some((filter) => filter.name === item)
    );
  }

  /**
   * Adds a new ingredient when the user selects an option.
   */
  onDropdownClick() {
    if (this.value.trim()) {
      this.filters = [...this.filters, { name: this.value }];
      this.value = ''; // Reset input field
    }
  }

  /**
   * Removes an ingredient from the filter list.
   */
  onChipRemove(value: string) {
    this.filters = this.recipes.filter((filter) => filter.name !== value);
  }

  /**
   * Calls API to fetch recipes based on selected ingredients.
   */
  loadRecipes() {
    
    const ingredientsQuery = this.ingredientService.getSelectedIngredients()
    .map((ingredient) => ingredient.name)
    .join(',');

    console.log(ingredientsQuery);
    if (ingredientsQuery!=""){
      this.apiService.getRecipes(ingredientsQuery).subscribe(
        (data) => {
          console.log('Réponse API:', data.recipes.recipe);
          if (data && Array.isArray(data.recipes.recipe)) {
            this.recipes = data.recipes.recipe.map((recipe: any) => ({
              id: recipe.recipe_id,
              name: recipe.recipe_name,
              category: recipe.recipe_description,
              calories: recipe.recipe_nutrition.calories,
              image: recipe.recipe_image, // Fallback image
            }));
          } else {
            this.recipes = [];
          }
          console.log(this.recipes);
        },
        (error) => {
          console.error('Error fetching recipes:', error);
        }
      );
    }
  }

  toRecipe(id : number) {
    console.log('Selected Ingredients:', this.recipeId.updateRecipeId(id));
    this.router.navigate(['/recipe']); // Navigate to Recipe List
  }
}
