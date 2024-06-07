import { Materiel } from '../../entity/materiel';
import { IMaterielController } from './IController';
import { IMaterielDbInput } from './IDbInput';
import { IMaterielDbOutput } from './IDbOutput';
import { IMaterielPresenter } from './IPresenter';

export class MaterielCrud {
  materiels: Materiel[];
  dbInput: IMaterielDbInput;
  dbOutput: IMaterielDbOutput;
  presenter: IMaterielPresenter;

  constructor(
    dbOutput: IMaterielDbOutput,
    dbInput: IMaterielDbInput,
    presenter: IMaterielPresenter,
    controller: IMaterielController
  ) {
    if (
      dbOutput == undefined ||
      dbInput == undefined ||
      presenter == undefined
    ) {
      throw new Error("Argument can't be undefined");
    }

    this.materiels = dbInput.recupererToutMateriel();
    this.dbInput = dbInput;
    this.dbOutput = dbOutput;
    this.presenter = presenter;
  }

  ajouterMateriel(materiel: Materiel): MaterielCrud {
    if (materiel == undefined) {
      throw new Error("Argument can't be undefined");
    }

    this.dbOutput.creerMateriel(materiel);
    this.materiels.push(materiel);
    return this;
  }

  supprimerMateriel(idMateriel: string): MaterielCrud {
    if (idMateriel == undefined) {
      throw new Error("Argument can't be undefined");
    }

    let materiel: Materiel | undefined = this.materiels.find((item) => {
      return item.idMateriel === idMateriel;
    });

    if (materiel == undefined) {
      throw new Error('Can not find materiel ' + idMateriel);
    }

    this.dbOutput.supprimerMateriel(materiel);
    this.materiels.splice(this.materiels.indexOf(materiel));

    return this;
  }

  modifierMateriel(
    idMateriel: string,
    nouveauMateriel: Materiel
  ): MaterielCrud {
    if (idMateriel == undefined || nouveauMateriel == undefined) {
      throw new Error("Argument can't be undefined");
    }

    let materielAModifier: Materiel =
      this.dbInput.recupererMateriel(idMateriel);

    if (materielAModifier == undefined) {
      throw new Error("Can't find this materiel");
    }

    materielAModifier.modifierMateriel(nouveauMateriel);
    this.dbOutput.modifierMateriel(nouveauMateriel);

    return this;
  }
}
