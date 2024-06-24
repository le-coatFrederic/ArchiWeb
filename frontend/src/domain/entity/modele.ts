import { Materiel } from './materiel';
import { TypeMateriel } from './typeMateriel';

export class Modele {
  constructor(
    public _id: string,
    public type: TypeMateriel,
    public intitule: string,
    public imageUrl: string,
    public materiels: Materiel[]
  ) {}

  ajouterMateriel(materiel: Materiel): Modele {
    materiel.modele = this;
    this.materiels.push(materiel);
    return this;
  }
}
