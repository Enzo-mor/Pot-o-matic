import { Component, Input } from '@angular/core';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-overview',
  imports: [CarteComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  @Input() recette!: any;
}
