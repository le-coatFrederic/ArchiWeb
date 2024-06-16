import { Injectable } from '@angular/core';
import { Utilisateur } from '../../domain/entity/utilisateur';
import { Modele } from '../../domain/entity/modele';
import { TypeMateriel } from '../../domain/entity/typeMateriel';
import { Salle } from '../../domain/entity/salle';
import { Materiel } from '../../domain/entity/materiel';

@Injectable({
  providedIn: 'root',
})
export class GetModelListService {
  private modeleList: Modele[];
  constructor() {
    ALLMODELE[0]
      .ajouterMateriel(
        new Materiel('MA0000', ALLMODELE[1], ALLSALLE[1], ALLUTILISATEUR[0])
      )
      .ajouterMateriel(
        new Materiel('MA0001', ALLMODELE[1], ALLSALLE[0], ALLUTILISATEUR[1])
      )
      .ajouterMateriel(
        new Materiel('MA0002', ALLMODELE[1], ALLSALLE[0], ALLUTILISATEUR[1])
      )
      .ajouterMateriel(
        new Materiel('MA0003', ALLMODELE[1], ALLSALLE[2], ALLUTILISATEUR[2])
      );
    ALLMODELE[1]
      .ajouterMateriel(
        new Materiel('MA0004', ALLMODELE[1], ALLSALLE[0], ALLUTILISATEUR[2])
      )
      .ajouterMateriel(
        new Materiel('MA0005', ALLMODELE[1], ALLSALLE[2], ALLUTILISATEUR[2])
      );

    ALLMODELE[2]
      .ajouterMateriel(
        new Materiel('MA0006', ALLMODELE[1], ALLSALLE[0], ALLUTILISATEUR[2])
      )
      .ajouterMateriel(
        new Materiel('MA0007', ALLMODELE[1], ALLSALLE[0], ALLUTILISATEUR[2])
      )
      .ajouterMateriel(
        new Materiel('MA0008', ALLMODELE[1], ALLSALLE[0], ALLUTILISATEUR[2])
      );

    this.modeleList = ALLMODELE;
  }

  getModeleList(): Modele[] {
    return [...this.modeleList];
  }

  getModeleById(id: string): Modele {
    const modele: Modele | undefined = this.modeleList.find(
      (m) => m.idModele === id
    );
    if (!modele) {
      throw new Error('modele not found');
    }
    return modele;
  }
}

let ALLSALLE: Salle[] = [
  new Salle(
    'SA0000',
    'Reserve',
    1,
    'A',
    'Avenue des facultés',
    '',
    '80000',
    'Amiens'
  ),
  new Salle(
    'SA0001',
    '12',
    1,
    'D',
    'Avenue des facultés',
    '',
    '80000',
    'Amiens'
  ),
  new Salle(
    'SA0002',
    'F001',
    1,
    'F',
    'Avenue des facultés',
    '',
    '80000',
    'Amiens'
  ),
];

let ALLTYPEMATERIAL: TypeMateriel[] = [
  new TypeMateriel('Bureau'),
  new TypeMateriel('Table'),
  new TypeMateriel('Chaise'),
  new TypeMateriel('Ordinateur'),
];

let ALLMODELE: Modele[] = [
  new Modele(
    'MO0000',
    ALLTYPEMATERIAL[0],
    "Bureau d'acajou",
    'https://i.ebayimg.com/images/g/QccAAOSwtCdkjEIM/s-l1200.jpg'
  ),
  new Modele(
    'MO0001',
    ALLTYPEMATERIAL[0],
    "Bureau d'acier",
    'https://www.inside75.com/contents/refim/-b/bureau-ferro-acier-industriel-roulettes.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
  new Modele(
    'MO0002',
    ALLTYPEMATERIAL[2],
    'Chaise de bureau simple',
    'https://www.chaisepro.fr/images/product/1/large/pl_1_1_6743.jpg'
  ),
];

let ALLUTILISATEUR: Utilisateur[] = [
  new Utilisateur('US0001', 'Cléa'),
  new Utilisateur('US0002', 'Fred'),
  new Utilisateur('US0003', 'Louison'),
];
