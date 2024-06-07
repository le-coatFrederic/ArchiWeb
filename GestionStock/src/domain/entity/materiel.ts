import { TypeMateriel } from './typeMateriel';

export class Materiel {
  idMateriel: String;
  modele: String;
  imageUrl: String;
  type?: TypeMateriel;

  constructor(id: String) {
    this.idMateriel = id;
    this.modele = '';
    this.imageUrl = '';
    this.type = undefined;
  }

  modifierMateriel(nouveauMateriel: Materiel): Materiel {
    if (nouveauMateriel.imageUrl !== undefined) {
      this.imageUrl = nouveauMateriel.imageUrl;
    }

    if (nouveauMateriel.modele !== undefined) {
      this.modele = nouveauMateriel.modele;
    }

    if (nouveauMateriel.type !== undefined) {
      this.type = nouveauMateriel.type;
    }

    return this;
  }
}
