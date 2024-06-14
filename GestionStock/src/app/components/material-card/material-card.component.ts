import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from '../../../domain/entity/materiel';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [],
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css',
})
export class MaterialCardComponent implements OnInit {
  @Input() materiel!: Materiel;

  ngOnInit(): void {
    console.log('Création de la carte ' + this.materiel);
  }
}
