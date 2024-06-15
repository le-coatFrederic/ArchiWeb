import { Materiel } from './materiel';
import { TypeMateriel } from './typeMateriel';

export class Modele {
  idModele: string;
  intitule: string;
  type: TypeMateriel;
  imageUrl: string;
  materiels: Materiel[];

  constructor(
    idModele: string,
    type: TypeMateriel,
    intitule: string,
    imageUrl: string
  ) {
    this.idModele = idModele;
    this.intitule = intitule;
    this.imageUrl = imageUrl;
    this.type = type;
    this.materiels = [];
  }

  ajouterMateriel(materiel: Materiel): Modele {
    materiel.modele = this;
    this.materiels.push(materiel);
    return this;
  }
}
