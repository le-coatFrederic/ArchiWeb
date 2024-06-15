import { Component, Input, OnInit } from '@angular/core';
import { Modele } from '../../../domain/entity/modele';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css',
})
export class MaterialCardComponent implements OnInit {
  @Input() modele!: Modele;
  quantity!: number;

  ngOnInit(): void {
    this.quantity = 0;
    this.modele.materiels.forEach((element) => {
      if (element.salle.idSalle == 'SA0000') {
        this.quantity++;
      }
    });
  }

  constructor() {
    console.log(this);
  }
}
