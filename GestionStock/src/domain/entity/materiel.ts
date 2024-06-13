import { DTOMateriel } from '../usecase/materiel/DTOMateriel';
import { Salle } from './salle';
import { TypeMateriel } from './typeMateriel';
import { Utilisateur } from './utilisateur';

export class Materiel {
  idMateriel: String;
  modele: String;
  imageUrl: String;
  type: TypeMateriel;
  salle: Salle;
  utilisateur: Utilisateur;

  constructor(
    id: String,
    type: TypeMateriel,
    salle: Salle,
    utilisateur: Utilisateur
  ) {
    if (
      id == undefined ||
      type == undefined ||
      salle == undefined ||
      utilisateur == undefined
    ) {
      throw new Error("Argument can't be undefined");
    }

    this.idMateriel = id;
    this.modele = '';
    this.imageUrl = '';
    this.type = type;
    this.salle = salle;
    this.utilisateur = utilisateur;
  }

  modifierMateriel(nouveauMateriel: DTOMateriel): Materiel {
    if (nouveauMateriel.imageURL !== undefined) {
      this.imageUrl = nouveauMateriel.imageURL;
    }

    if (nouveauMateriel.modele !== undefined) {
      this.modele = nouveauMateriel.modele;
    }

    if (nouveauMateriel.type !== undefined) {
      this.type = nouveauMateriel.type;
    }

    if (nouveauMateriel.salle !== undefined) {
      this.salle = nouveauMateriel.salle;
    }

    if (nouveauMateriel.utilisateur !== undefined) {
      this.utilisateur = this.utilisateur;
    }

    return this;
  }
}
