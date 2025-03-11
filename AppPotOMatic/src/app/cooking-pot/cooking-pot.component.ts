import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cooking-pot',
  templateUrl: './cooking-pot.component.html',
  styleUrls: ['./cooking-pot.component.css'],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class CookingPotComponent {
  isFinished = false;

  finishCooking() {
    this.isFinished = true; // Change l'état pour afficher le message de fin
  }
}
