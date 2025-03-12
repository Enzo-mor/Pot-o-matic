import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventaire.component.html',
  styleUrl: './inventaire.component.css',
})
export class InventaireComponent implements OnInit {
  inventaire: any[] = [];
  searchQuery: string = ''; // Commence vide

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Ne charge pas d'aliments par défaut, attend que l'utilisateur tape
  }

  loadIngredients(query: string) {
    if (!query.trim()) {
      this.inventaire = []; // Si l'utilisateur efface, vide la liste
      return;
    }

    this.apiService.getIngredients(query).subscribe(
      (data) => {
        if (data.foods && data.foods.food) {
          this.inventaire = data.foods.food.map((food: any, index: number) => ({
            id: index + 1,
            nom: food.food_name,
            quantite: Math.floor(Math.random() * 5) + 1, // Quantité aléatoire
            unite: 'kg',
            added: false,
          }));
        } else {
          this.inventaire = []; // Aucune correspondance trouvée
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

  toggleIngredient(index: number) {
    this.inventaire[index].added = !this.inventaire[index].added;
  }
}
