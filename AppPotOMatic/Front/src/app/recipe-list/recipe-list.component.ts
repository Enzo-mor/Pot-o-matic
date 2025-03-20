import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';

import { ChipModule } from 'primeng/chip';

interface FilterOption {
  name: string;
}

interface Meal {
  name: string;
  category: string;
  recipeTime: number; // in minutes
}

@Component({
  selector: 'app-recipe-list',
  imports: [AutoCompleteModule, FormsModule, ChipModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @ViewChild('autocomplete') autoComplete!: AutoComplete;

  options: string[] = ['One', 'Two', 'Three'];

  filters: FilterOption[] = [];

  items: any[] = [];

  value: string = '';

  search(event: AutoCompleteCompleteEvent) {
    this.items = ['Egg', 'Banana', 'Apple'].filter(
      (item) => this.filters.map((f) => f.name).indexOf(item) === -1
    );
  }

  onChipRemove = (value: String) => {
    this.filters = this.filters.filter((f) => f.name !== value);
  };

  onDropdownClick = () => {
    const inputElement = document.getElementById(
      'input-field'
    ) as HTMLInputElement;
    if (inputElement) {
      this.filters = [...this.filters, { name: this.value }];
      inputElement.value = '';
      this.value = '';
    }
  };

  recipes: Meal[] = [
    {
      name: 'Spring salad',
      category: 'Vegetarian',
      recipeTime: 30,
    },
    {
      name: 'Beef & eggs',
      category: 'Beef lover',
      recipeTime: 15,
    },
    {
      name: 'Salmon & veggies',
      category: 'Pescatarian',
      recipeTime: 45,
    },
    {
      name: 'Spring salad',
      category: 'Vegetarian',
      recipeTime: 30,
    },
    {
      name: 'Beef & eggs',
      category: 'Beef lover',
      recipeTime: 15,
    },
    {
      name: 'Salmon & veggies',
      category: 'Pescatarian',
      recipeTime: 45,
    },
  ];
}
