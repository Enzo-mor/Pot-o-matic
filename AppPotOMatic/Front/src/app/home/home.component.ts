import { Component } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { Router } from '@angular/router';
import { RechercheIngredientComponent } from '../recherche-ingredient/recherche-ingredient.component';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RechercheIngredientComponent],
})
export class HomeComponent {
  constructor(private ingredientService: IngredientService, private router: Router) {}

  startCooking() {
    console.log('Selected Ingredients:', this.ingredientService.getSelectedIngredients());
    this.router.navigate(['/pot']); // Navigate to Recipe List
  }
}
