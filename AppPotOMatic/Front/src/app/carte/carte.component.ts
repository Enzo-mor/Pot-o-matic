import { Component } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { latLng, tileLayer, marker, icon, Marker } from 'leaflet';

@Component({
  selector: 'app-carte',
  imports: [LeafletModule],
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent {
  positions = [{ lat: 48.041222, lon: 0.171662 }];
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 13,
    center: latLng(48.041222, 0.171662), // Change to your preferred location
    zoomControl: false,
  };

  layers: Marker[] = this.positions.map(
    (location) =>
      marker([location.lat, location.lon], {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          iconUrl:
            'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          shadowUrl:
            'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        }),
      }).bindPopup('bjr') // Optional popup with label
  );
}
