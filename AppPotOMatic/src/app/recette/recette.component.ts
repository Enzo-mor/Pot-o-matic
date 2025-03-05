import { Component } from '@angular/core';

@Component({
  selector: 'app-recette',
  imports: [],
  templateUrl: './recette.component.html',
  styleUrl: './recette.component.css'
})
export class RecetteComponent {
  recettes = [
    { id: 1, name: 'Pates Bolo', allergies: 'Gluten', src: "", nat: 'Italie' },
    { id: 2, name: 'Pates Carbo', allergies: 'Gluten', src: "", nat: 'Italie'  },
    { id: 3, name: 'Tarte tatin', allergies: 'Gluten', src: "", nat: 'France' },
    { id: 4, name: 'Sushis', allergies: 'Riz, Arachides', src: "", nat: 'Japon' },
    { id: 5, name: 'Salade Cesar', allergies: 'Gluten', src: "", nat: 'Italie' },
    { id: 6, name: 'Chili con carne', allergies: 'Tomate', src: "", nat: 'Mexique' },
  ];
}
