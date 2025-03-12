import { Component } from '@angular/core';

@Component({
  selector: 'app-cooking-pot',
  templateUrl: './cooking-pot.component.html',
  styleUrls: ['./cooking-pot.component.css'],
  imports: [],
})
export class CookingPotComponent {
  isFinished = false;

  finishCooking() {
    this.isFinished = true; // Change l'état pour afficher le message de fin
  }
}
