import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-liste-ingredient',
  imports: [],
  templateUrl: './liste-ingredient.component.html',
  styleUrl: './liste-ingredient.component.css',
})
export class ListeIngredientComponent {
  @Input() liste!: any;
}
