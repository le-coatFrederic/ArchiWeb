import { Organisme } from './organisme';
import { Role } from './role';

export class Utilisateur {
  idUtilisateur: string;
  nom: string;
  prenom?: string;
  organisme?: Organisme;
  role?: Role;

  constructor(id: string, nom: string) {
    this.idUtilisateur = id;
    this.nom = nom;
  }
}
