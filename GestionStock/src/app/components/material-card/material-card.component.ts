import { Component, Input, OnInit } from '@angular/core';
import { Modele } from '../../../domain/entity/modele';
import { NgClass, SlicePipe } from '@angular/common';
import { OnClickModeleCardService } from '../../services/on-click-modele-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [SlicePipe, NgClass],
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css',
})
export class MaterialCardComponent implements OnInit {
  @Input() modele!: Modele;
  quantity!: number;
  quantityWanted: number = 0;

  constructor(
    private cardClick: OnClickModeleCardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quantity = 0;
    this.modele.materiels.forEach((element) => {
      if (element.salle.idSalle == 'SA0000') {
        this.quantity++;
      }
    });
  }

  onRemoveClick() {
    this.quantityWanted--;
  }

  onAddClick() {
    this.quantityWanted++;
  }

  onDetailClick() {
    this.router.navigateByUrl('/modele/detail/' + this.modele.idModele);
  }
}
