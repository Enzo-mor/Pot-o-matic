import { Component } from '@angular/core';

@Component({
  selector: 'app-carte',
  imports: [],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent {
  positions = [
    { lat: -1232, lon: 2032 },
    { lat: 1023, lon: -2432 },
    { lat: 2812, lon: 2019 },
    { lat: -1238, lon: -4391 }
  ];
}
