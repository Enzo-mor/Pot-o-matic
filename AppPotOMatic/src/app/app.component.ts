import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecetteComponent } from './recette/recette.component';
import { RechercheIngredientComponent } from './recherche-ingredient/recherche-ingredient.component';
import { SelectionIngredientsComponent } from './selection-ingredients/selection-ingredients.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent,HeaderComponent,RecetteComponent,RechercheIngredientComponent,SelectionIngredientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppPotOMatic';
}
