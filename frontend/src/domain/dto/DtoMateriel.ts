import { Modele } from '../entity/materiel';
import { Salle } from '../entity/salle';
import { Utilisateur } from '../entity/utilisateur';

export class DTOMateriel {
  modele?: Modele;
  salle?: Salle;
  utilisateur?: Utilisateur;

  constructor(modele?: Modele, salle?: Salle, utilisateur?: Utilisateur) {
    this.modele = modele;
    this.salle = salle;
    this.utilisateur = utilisateur;
  }
}
