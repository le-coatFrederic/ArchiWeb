import { Component, Input, OnInit, Type, input } from '@angular/core';
import { Materiel } from '../../../domain/entity/materiel';
import { Salle } from '../../../domain/entity/salle';
import { TypeMateriel } from '../../../domain/entity/typeMateriel';
import { Utilisateur } from '../../../domain/entity/utilisateur';
import { MaterialCardComponent } from '../material-card/material-card.component';
import { Modele } from '../../../domain/entity/modele';

@Component({
  selector: 'app-material-grid',
  standalone: true,
  imports: [MaterialCardComponent],
  templateUrl: './material-grid.component.html',
  styleUrl: './material-grid.component.css',
})
export class MaterialGridComponent implements OnInit {
  materialList!: Materiel[];
  constructor() {}
  ngOnInit(): void {
    this.materialList = ALLMATERIAL.filter((obj) => obj.salle === ALLSALLE[0]);
    console.log(this.materialList);
  }
}

let ALLSALLE: Salle[] = [
  new Salle(
    'SA0001',
    'Reserver',
    1,
    'A',
    'Avenue des facultés',
    '',
    '80000',
    'Amiens'
  ),
  new Salle(
    'SA0002',
    '12',
    1,
    'D',
    'Avenue des facultés',
    '',
    '80000',
    'Amiens'
  ),
  new Salle(
    'SA0003',
    'F001',
    1,
    'F',
    'Avenue des facultés',
    '',
    '80000',
    'Amiens'
  ),
];

let ALLTYPEMATERIAL: TypeMateriel[] = [new TypeMateriel('Bureau')];

let ALLMODELE: Modele[] = [
  new Modele(
    'MO0001',
    ALLTYPEMATERIAL[0],
    "Bureau d'acajou",
    'https://i.ebayimg.com/images/g/QccAAOSwtCdkjEIM/s-l1200.jpg'
  ),
];

let ALLUTILISATEUR: Utilisateur[] = [
  new Utilisateur('US0001', 'Cléa'),
  new Utilisateur('US0002', 'Fred'),
  new Utilisateur('US0003', 'Louison'),
];

let ALLMATERIAL: Materiel[] = [
  new Materiel('MA0000', ALLMODELE[0], ALLSALLE[1], ALLUTILISATEUR[0]),
  new Materiel('MA0001', ALLMODELE[0], ALLSALLE[0], ALLUTILISATEUR[1]),
  new Materiel('MA0002', ALLMODELE[0], ALLSALLE[0], ALLUTILISATEUR[1]),
  new Materiel('MA0003', ALLMODELE[0], ALLSALLE[2], ALLUTILISATEUR[2]),
];
