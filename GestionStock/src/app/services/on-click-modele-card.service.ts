import { Injectable, ModelFunction, model } from '@angular/core';
import { Modele } from '../../domain/entity/modele';
import { addRemove } from '../../domain/type/addRemoveAction.type';

@Injectable({
  providedIn: 'root',
})
export class OnClickModeleCardService {
  private modeleChosed: Modele[];
  constructor() {
    this.modeleChosed = [];
  }

  addModele(modele: Modele, action: addRemove) {
    if (!modele) {
      throw console.error("Modele can't be undefined");
    }

    if (action === 'add') {
      this.modeleChosed.push(modele);
    } else if (action === 'remove') {
      this.modeleChosed.splice(this.modeleChosed.indexOf(modele));
    }
  }
}
