import { Materiel } from '../../entity/materiel';
import { MaterielCrud } from './MaterielCrud';

export interface IMaterielDbInput {
  recupererMateriel(idMateriel: string): Materiel;
  recupererToutMateriel(): Materiel[];
}
