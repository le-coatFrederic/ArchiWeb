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
  selected!: boolean;

  constructor(
    private cardClick: OnClickModeleCardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selected = false;
    this.quantity = 0;
    this.modele.materiels.forEach((element) => {
      if (element.salle.idSalle == 'SA0000') {
        this.quantity++;
      }
    });
  }
  onSelectClick() {
    if (this.selected) {
      this.selected = false;
      this.cardClick.addModele(this.modele, 'remove');
      console.log(this.cardClick.print());
    } else {
      this.selected = true;
      this.cardClick.addModele(this.modele, 'add');
      console.log(this.cardClick.print());
    }
  }

  onDetailClick() {
    this.router.navigateByUrl('/modele/detail/' + this.modele.idModele);
  }
}
