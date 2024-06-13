import { Salle } from '../../entity/salle';
import { TypeMateriel } from '../../entity/typeMateriel';
import { Utilisateur } from '../../entity/utilisateur';

export class DTOMateriel {
  modele: string;
  imageURL?: string;
  type?: TypeMateriel;
  salle?: Salle;
  utilisateur?: Utilisateur;

  constructor(
    modele: string,
    imageURL?: string,
    type?: TypeMateriel,
    salle?: Salle,
    utilisateur?: Utilisateur
  ) {
    this.modele = modele;
    this.imageURL = imageURL;
    this.type = type;
    this.salle = salle;
    this.utilisateur = utilisateur;
  }
}
