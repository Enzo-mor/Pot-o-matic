import { Component } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';
import { RechercheIngredientComponent } from '../recherche-ingredient/recherche-ingredient.component';
import { CarteComponent } from '../carte/carte.component';
import { ListeIngredientComponent } from '../liste-ingredient/liste-ingredient.component';
import { RecetteBoxComponent } from '../recette-box/recette-box.component';

@Component({
  selector: 'app-recette',
  imports: [
    OverviewComponent,
    RechercheIngredientComponent,
    CarteComponent,
    ListeIngredientComponent,
    RecetteBoxComponent,
  ],
  templateUrl: './recette.component.html',
  styleUrl: './recette.component.css',
})
export class RecetteComponent {
  pngUrl =
    'https://png.pngtree.com/png-vector/20231001/ourmid/pngtree-illustration-cartoon-spaghetti-bolognese-delicious-food-dining-decoration-pattern-cutout-png-image_10141554.png';
  recettes = [
    {
      id: 1,
      name: 'Pates Bolo',
      allergies: 'Gluten',
      src: this.pngUrl,
      nat: 'Italie',
      liste: ['Pates', 'Tomate', 'Viande hachée', 'Oignon', 'Ail'],
    },
    {
      id: 2,
      name: 'Pates Carbo',
      allergies: 'Gluten',
      src: this.pngUrl,
      nat: 'Italie',
      liste: ['Pates', 'Crème', 'Lardons', 'Parmesan'],
    },
    {
      id: 3,
      name: 'Tarte tatin',
      allergies: 'Gluten',
      src: this.pngUrl,
      nat: 'France',
      liste: ['Pommes', 'Pate brisée', 'Sucre', 'Beurre'],
    },
    {
      id: 4,
      name: 'Sushis',
      allergies: 'Riz, Arachides',
      src: this.pngUrl,
      nat: 'Japon',
      liste: ['Riz', 'Saumon', 'Avocat', 'Vinaigre de riz'],
    },
    {
      id: 5,
      name: 'Salade Cesar',
      allergies: 'Gluten',
      src: this.pngUrl,
      nat: 'Italie',
      liste: ['Salade', 'Poulet', 'Parmesan', 'Croûtons', 'Sauce Cesar'],
    },
    {
      id: 6,
      name: 'Chili con carne',
      allergies: 'Tomate',
      src: this.pngUrl,
      nat: 'Mexique',
      liste: ['Haricots rouges', 'Viande hachée', 'Tomate', 'Oignon', 'Ail'],
    },
  ];
}
