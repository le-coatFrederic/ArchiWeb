import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from '../../../../domain/entity/materiel';
import { Observable } from 'rxjs';
import { MaterielService } from '../../../services/materiel.service';

@Component({
  selector: 'app-materiel-detail',
  standalone: true,
  imports: [],
  templateUrl: './modele-detail.component.html',
  styleUrl: './modele-detail.component.css',
})
export class MaterielDetailComponent {
  materiel!: Materiel;
  constructor(
    public getMaterielList: MaterielService,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        let materielObservable: Observable<Materiel> =
          getMaterielList.getMaterielById(params.id);
        materielObservable.subscribe((serverMateriel) => {
          this.materiel = serverMateriel;
        });
      }
    });
  }
}
