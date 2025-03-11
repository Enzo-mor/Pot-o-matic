import { Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { SearchIngredientComponent } from './search-ingredient/search-ingredient.component';

export const routes: Routes = [
  {
    path: '',
    component: RecetteComponent,
  },
  {
    path: 'inventaire',
    component: InventaireComponent,
  },
  {
  path: 'pot',
    component: SearchIngredientComponent,
  },
];
