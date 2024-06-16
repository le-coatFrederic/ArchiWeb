import { Component, OnInit } from '@angular/core';
import { OnClickModeleCardService } from '../../services/on-click-modele-card.service';
import { Modele } from '../../../domain/entity/modele';

@Component({
  selector: 'app-page-commande-modele',
  standalone: true,
  imports: [],
  templateUrl: './page-commande-modele.component.html',
  styleUrl: './page-commande-modele.component.css',
})
export class PageCommandeModeleComponent implements OnInit {
  selectedModeles!: Modele[];
  constructor(private selectedModeleService: OnClickModeleCardService) {}

  ngOnInit(): void {
    this.selectedModeleService.print();
    this.selectedModeles = this.selectedModeleService.getModeles();
  }
}
