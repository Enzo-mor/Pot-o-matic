import { Component } from '@angular/core';
import { CookingPotComponent } from '../cooking-pot/cooking-pot.component';
import { RechercheIngredientComponent } from '../recherche-ingredient/recherche-ingredient.component';

@Component({
  selector: 'app-search-ingredient',
  imports: [
    CookingPotComponent,
    RechercheIngredientComponent
  ],
  templateUrl: './search-ingredient.component.html',
  styleUrl: './search-ingredient.component.css'
})
export class SearchIngredientComponent {

}
