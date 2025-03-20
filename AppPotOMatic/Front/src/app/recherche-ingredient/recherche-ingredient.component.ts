import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

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
  
  ingredients: any[] = [];
  searchQuery: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Ne charge pas d'aliments par défaut, attend que l'utilisateur tape
  }

  loadIngredients(query: string) {
    console.log('CC');
    if (!query.trim()) {
      this.ingredients = []; // Si l'utilisateur efface, vide la liste
      return;
    }

    this.apiService.getIngredients(query).subscribe(
      (data) => {
        if (data.foods && data.foods.food) {
          this.ingredients = data.foods.food.map((food: any, index: number) => ({
            id: index + 1,
            name: food.food_name,
            quantity: Math.floor(Math.random() * 5) + 1, // Quantité aléatoire
          }));
        } else {
          this.ingredients = []; // Aucune correspondance trouvée
        }
      },
      (error) => {
        console.error('Erreur API:', error);
      }
    );
  }

  onSearchChange() {
    console.log('Recherche:', this.searchQuery);
    this.loadIngredients(this.searchQuery);
  }

  decreaseQuantity(ingredient: Ingredient) {
    if (ingredient.quantity > 0) {
      ingredient.quantity--;
    }
  }

  increaseQuantity(ingredient: Ingredient) {
    ingredient.quantity++;
  }
}
