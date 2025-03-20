import { Component } from '@angular/core';
import { RechercheIngredientComponent } from '../recherche-ingredient/recherche-ingredient.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RechercheIngredientComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
