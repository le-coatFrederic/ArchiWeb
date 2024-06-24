import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modele } from '../../../domain/entity/modele';
import { Observable } from 'rxjs';
import { ModeleService } from '../../services/modele-service.service';

@Component({
  selector: 'app-modele-detail',
  standalone: true,
  imports: [],
  templateUrl: './modele-detail.component.html',
  styleUrl: './modele-detail.component.css',
})
export class ModeleDetailComponent {
  modele!: Modele;
  constructor(getModeleList: ModeleService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        let modeleObservable: Observable<Modele> = getModeleList.getModeleById(
          params.id
        );
        modeleObservable.subscribe((serverModele) => {
          this.modele = serverModele;
        });
      }
    });
  }
}
