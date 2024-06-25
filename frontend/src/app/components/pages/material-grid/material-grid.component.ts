import { Component, OnInit } from '@angular/core';
import { MaterialCardComponent } from '../../material-card/material-card.component';
import { Observable } from 'rxjs';
import { Materiel } from '../../../../domain/entity/materiel';
import { MaterielService } from '../../../services/materiel.service';

@Component({
  selector: 'app-material-grid',
  standalone: true,
  imports: [MaterialCardComponent],
  templateUrl: './material-grid.component.html',
  styleUrl: './material-grid.component.css',
})
export class MaterialGridComponent implements OnInit {
  materiels!: Materiel[];

  constructor(private modeleListGetter: MaterielService) {
    let modeleObservable: Observable<Materiel[]> =
      this.modeleListGetter.getMateriels();

    modeleObservable.subscribe((serverMateriels) => {
      this.materiels = serverMateriels;
    });
  }
  ngOnInit(): void {}
}
