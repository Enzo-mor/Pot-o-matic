import { Component, OnInit } from '@angular/core';
import { CarteComponent } from '../carte/carte.component'
import { ApiService } from '../services/api.service';
import { RecipeIdService } from '../services/recipeId.service';



interface Ingredient {
  id: number;
  name: string;
  quantity: number;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  allergen: string;
  time : number;
  ingredients: Ingredient[];
}

@Component({
  selector: 'app-recipe-page',
  imports: [CarteComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css',
})


export class RecipePageComponent implements OnInit{

  recipe : Recipe[]=[];

  constructor(private apiService: ApiService, private recipeIdService: RecipeIdService) {}
  
  ngOnInit(): void {
    this.loadRecipeInfo();
  }

  loadRecipeInfo() {
    
    const recipeIdQuery = this.recipeIdService.getSelectedRecipeId();

    console.log('QUERY :', recipeIdQuery);
    if(recipeIdQuery != null){
      this.apiService.getRecipeDetails(recipeIdQuery.toString()).subscribe(
        (data) => {
          console.log('Réponse API:', data);
          if (data && Array.isArray(data.recipes.recipe)) {
            this.recipe = data.recipes.recipe.map((recipe: any) => ({
              id: recipe.recipe_id,
              name: recipe.recipe_name,
              category: 'Unknown',
              recipeTime: 0,
              image: recipe.recipe_url || 'https://via.placeholder.com/150', // Fallback image
            }));
          } else {
            this.recipe = [];
          }
          console.log(this.recipe);
        },
        (error) => {
          console.error('Error fetching recipes:', error);
        }
      );
    }
  }

}
