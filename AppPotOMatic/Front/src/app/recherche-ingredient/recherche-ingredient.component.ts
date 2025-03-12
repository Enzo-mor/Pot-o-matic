import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Ingredient {
  name: string;
  icon: string;
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
  searchQuery: string = '';
  ingredients: Ingredient[] = [
    { name: 'Œuf', icon: '🥚', quantity: 0 },
    { name: 'Tomate', icon: '🍅', quantity: 0 },
    { name: 'Fromage', icon: '🧀', quantity: 0 },
    { name: 'Pain', icon: '🍞', quantity: 0 },
    { name: 'Salade', icon: '🥬', quantity: 0 },
    { name: 'Poivron', icon: '🫑', quantity: 0 },
    { name: 'Oignon', icon: '🧅', quantity: 0 },
    { name: 'Carotte', icon: '🥕', quantity: 0 },
    { name: 'Riz', icon: '🍚', quantity: 0 },
  ];

  get filteredIngredients() {
    return this.ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
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
