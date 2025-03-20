import { Component } from '@angular/core';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-recipe-page',
  imports: [CarteComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css',
})
export class RecipePageComponent {}
