import { Component, OnInit } from '@angular/core';

import { Ingredient } from './ingredient';
import { INGREDIENTS } from './mock-ingredients';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selection-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selection-ingredients.component.html',
  styleUrls: ['./selection-ingredients.component.css']
})

export class SelectionIngredientsComponent implements OnInit{

  ingredients: Ingredient[] = [];

  ngOnInit(){
    this.ingredients = INGREDIENTS;
  }
}
