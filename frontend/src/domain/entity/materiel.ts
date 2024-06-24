import { DTOMateriel } from '../dto/DtoMateriel';
import { Modele } from './modele';
import { Salle } from './salle';
import { Utilisateur } from './utilisateur';

export class Materiel {
  constructor(
    public _id: String,
    public modele: Modele,
    public salle: Salle,
    public utilisateur: Utilisateur
  ) {}

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
