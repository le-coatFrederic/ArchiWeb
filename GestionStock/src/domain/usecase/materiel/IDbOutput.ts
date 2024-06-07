import { Materiel } from '../../entity/materiel';

export interface IMaterielDbOutput {
  creerMateriel(materiel: Materiel): void;
  modifierMateriel(nouveauMateriel: Materiel): void;
  supprimerMateriel(materiel: Materiel): void;
}
