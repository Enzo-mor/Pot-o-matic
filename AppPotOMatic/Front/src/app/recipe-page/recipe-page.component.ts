import { Component, OnInit } from '@angular/core';
import { CarteComponent } from '../carte/carte.component'
import { ApiService } from '../services/api.service';
import { RecipeIdService } from '../services/recipeId.service';



interface Ingredient {
  id: number;
  name: string;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  cooking_time : number;
  preparation_time : number;
  ingredients: Ingredient[];
  direction: String;
  image: string;
}

@Component({
  selector: 'app-recipe-page',
  imports: [CarteComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css',
})


export class RecipePageComponent implements OnInit{

  recipe: Recipe | null = null;

  constructor(private apiService: ApiService, private recipeIdService: RecipeIdService) {}
  
  ngOnInit(): void {
    this.loadRecipeInfo();
  }

  loadRecipeInfo() {
    const recipeIdQuery = this.recipeIdService.getSelectedRecipeId();
  
    console.log('QUERY :', recipeIdQuery);
  
    if (recipeIdQuery != null) {
      this.apiService.getRecipeDetails(recipeIdQuery.toString()).subscribe(
        (data) => {
          console.log('Réponse API:', data);
  
          if (data) {
            this.recipe = {
              id: recipeIdQuery,
              name: data.recipe.recipe_name,
              description: data.recipe.recipe_description || 'No description available.',
              cooking_time: data.recipe.cooking_time_min || 0,
              preparation_time: data.recipe.preparation_time_min || 0,
  
              // ✅ Corrected Ingredients Parsing
              ingredients: data.recipe.ingredients?.ingredient?.map((ing: any) => ({
                name: ing.ingredient_description,
                id: ing.food_id || 1,
              })) || [],
  
              // ✅ Corrected Directions Parsing
              direction: data.recipe.directions?.direction
                ? data.recipe.directions.direction.map((d: any) => d.direction_description).join(' ')
                : 'No directions available.',
  
              // ✅ Corrected Image Access
              image: data.recipe.recipe_images.recipe_image,
            };
          } else {
            this.recipe = null;
          }
  
          console.log(this.recipe);
        },
        (error) => {
          console.error('Error fetching recipe details:', error);
          this.recipe = null;
        }
      );
    }
  }
  
  

}
