import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recette',
  imports: [],
  templateUrl: './recette.component.html',
  styleUrl: './recette.component.css'
})
export class RecetteComponent implements OnInit{
  picture!: String;
  nom!: String;
  Recette!:String;
  Ingredients!:String;

  ngOnInit(): void {
      this.picture="https://dummyimage.com/600x700/dee2e6/6c757d.jpg";
      this.nom="nom recette";
  }

}
