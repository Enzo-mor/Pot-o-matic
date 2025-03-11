import { Routes } from '@angular/router';
import { ListeIngredientComponent } from './liste-ingredient/liste-ingredient.component';
import { RechercheIngredientComponent } from './recherche-ingredient/recherche-ingredient.component';
import { OverviewComponent } from './overview/overview.component';
import { RecetteComponent } from './recette/recette.component';
import { InventaireComponent } from './inventaire/inventaire.component';

export const routes: Routes = [
  {
    path: '',
    component: RecetteComponent,
  },
  {
    path: 'inventaire',
    component: InventaireComponent,
  },
];
