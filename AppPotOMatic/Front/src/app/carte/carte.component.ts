import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { latLng, tileLayer, marker, icon, Marker, Map } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

@Component({
  standalone: true,
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
  imports: [LeafletModule],
})
export class CarteComponent {
  private map!: Map; // Instance de la carte Leaflet
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 13,
    center: latLng(48.8566, 2.3522), // Paris par défaut
  };

  layers: Marker[] = []; // Liste des marqueurs

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  // Méthode appelée après l'initialisation de la carte
  onMapReady(map: Map) {
    this.map = map;
  }

  // 🔍 Rechercher une ville et centrer la carte dessus
  searchCity(city: string) {
    this.apiService.searchCity(city).subscribe(
      (data) => {
        const lat = parseFloat(data.lat);
        const lon = parseFloat(data.lon);

        // Met à jour la position de la carte
        this.map.setView([lat, lon], 13);

        // Ajoute un marqueur pour la ville
        this.layers = [
          marker([lat, lon], {
            icon: icon({
              iconSize: [30, 45],
              iconAnchor: [15, 45],
              iconUrl:
                'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            }),
          }).bindPopup(`📍 ${city}`).openPopup(),
        ];

        // Récupérer les supermarchés après avoir centré la carte
        this.getSupermarkets(lat, lon);
      },
      (error) => console.error('Erreur Nominatim:', error)
    );
  }

  // 🛒 Récupérer les supermarchés et les afficher sur la carte
  getSupermarkets(lat: number, lon: number) {
    this.apiService.getSupermarkets(lat, lon).subscribe(
      (supermarkets: any[]) => {
        // Ajoute les nouveaux marqueurs et met à jour la vue
        this.layers = [
          ...this.layers, // Conserve le marqueur de la ville
          ...supermarkets.map((s: any) =>
            marker([s.lat, s.lon], {
              icon: icon({
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                iconUrl:
                  'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
              }),
            }).bindPopup(s.tags?.name || 'Supermarché')
          ),
        ];

        // Forcer Angular à détecter les changements
        this.cdr.detectChanges();
      },
      (error) => console.error('Erreur Overpass:', error)
    );
  }
}