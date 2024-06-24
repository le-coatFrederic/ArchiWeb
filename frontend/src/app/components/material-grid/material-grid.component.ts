import { Component, Input, OnInit, Type, input } from '@angular/core';
import { Materiel } from '../../../domain/entity/materiel';
import { Salle } from '../../../domain/entity/salle';
import { TypeMateriel } from '../../../domain/entity/typeMateriel';
import { Utilisateur } from '../../../domain/entity/utilisateur';
import { MaterialCardComponent } from '../material-card/material-card.component';
import { Modele } from '../../../domain/entity/modele';
import { ModeleService } from '../../services/modele-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-material-grid',
  standalone: true,
  imports: [MaterialCardComponent],
  templateUrl: './material-grid.component.html',
  styleUrl: './material-grid.component.css',
})
export class MaterialGridComponent implements OnInit {
  modeles!: Modele[];
  constructor(private modeleListGetter: ModeleService) {
    let modeleObservable: Observable<Modele[]> =
      this.modeleListGetter.getModeleList();

    modeleObservable.subscribe((serverModeles) => {
      this.modeles = serverModeles;
    });
  }
  ngOnInit(): void {}
}
