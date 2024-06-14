import { DTOMateriel } from '../dto/DtoMateriel';
import { Modele } from './modele';
import { Salle } from './salle';
import { TypeMateriel } from './typeMateriel';
import { Utilisateur } from './utilisateur';

export class Materiel {
  idMateriel: String;
  modele: Modele;
  salle: Salle;
  utilisateur: Utilisateur;

  constructor(
    id: String,
    modele: Modele,
    salle: Salle,
    utilisateur: Utilisateur
  ) {
    this.idMateriel = id;
    this.modele = modele;
    this.salle = salle;
    this.utilisateur = utilisateur;
  }

  modifierMateriel(nouveauMateriel: DTOMateriel): Materiel {
    if (nouveauMateriel.modele !== undefined) {
      this.modele = nouveauMateriel.modele;
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
