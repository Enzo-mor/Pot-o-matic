import { Component } from '@angular/core';

@Component({
  selector: 'app-inventaire',
  imports: [],
  templateUrl: './inventaire.component.html',
  styleUrl: './inventaire.component.css',
})
export class InventaireComponent {
  inventaire = [
    {
      id: 1,
      nom: 'Pomme',
      quantite: 5,
      unite: 'kg',
      added: false,
    },
    {
      id: 2,
      nom: 'Poire',
      quantite: 2,
      unite: 'kg',
      added: true,
    },
    {
      id: 3,
      nom: 'Banane',
      quantite: 3,
      unite: 'kg',
      added: false,
    },
    {
      id: 4,
      nom: 'Kiwi',
      quantite: 1,
      unite: 'kg',
      added: false,
    },
    {
      id: 5,
      nom: 'Orange',
      quantite: 4,
      unite: 'kg',
      added: false,
    },
  ];
}
