import { Materiel } from '../../entity/materiel';

export interface IMaterielPresenter {
  afficherMateriel(materiel: Materiel): string;
  afficherNomMateriel(materiel: Materiel): string;
  afficherListeMateriel(materiels: Materiel[]): string;
}
