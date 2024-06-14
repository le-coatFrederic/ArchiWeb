import { TypeMateriel } from './typeMateriel';

export class Modele {
  idModele: string;
  intitule: string;
  type: TypeMateriel;
  imageUrl: string;

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
  }
}
