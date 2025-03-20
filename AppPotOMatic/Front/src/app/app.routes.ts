import { Routes } from '@angular/router';
import { InventaireComponent } from './inventaire/inventaire.component';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'inventaire',
    component: InventaireComponent,
  },
  {
    path: 'pot',
    component: RecipeListComponent,
  },
  {
    path: 'recipe',
    component: RecipePageComponent,
  },
];
