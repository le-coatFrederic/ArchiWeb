import { DTOMateriel } from './DTOMateriel';
import { MaterielCrud } from './MaterielCrud';

export interface IMaterielController {
  ajouterNouveauMateriel(crud: MaterielCrud, materiel: DTOMateriel): void;
  modifierMateriel(crud: MaterielCrud, materiel: DTOMateriel): void;
  supprimerMateriel(crud: MaterielCrud, materielId: string): void;
}
