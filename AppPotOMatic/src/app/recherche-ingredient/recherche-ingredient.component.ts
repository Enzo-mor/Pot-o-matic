import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-recherche-ingredient',
  standalone: true, // ✅ Standalone Component
  imports: [CommonModule, FormsModule], // ✅ Ajout de FormsModule ici
  templateUrl: './recherche-ingredient.component.html',
  styleUrls: ['./recherche-ingredient.component.css']
})
export class RechercheIngredientComponent {
  searchQuery: string = '';
  ingredients = [
    { name: 'Œuf', icon: '🥚' },
    { name: 'Tomate', icon: '🍅' },
    { name: 'Fromage', icon: '🧀' },
    { name: 'Pain', icon: '🍞' },
    { name: 'Salade', icon: '🥬' },
    { name: 'Poivron', icon: '🫑' },
    { name: 'Oignon', icon: '🧅' },
    { name: 'Carotte', icon: '🥕' },
    { name: 'Riz', icon: '🍚' }
  ];

  get filteredIngredients() {
    return this.ingredients.filter(ingredient =>
      ingredient.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}