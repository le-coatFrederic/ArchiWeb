import { Schema, model } from "mongoose";
import { Modele } from "./modele.model";
import { Salle } from "./salle.model";
import { Utilisateur } from "./utilisateur.model";

export interface Materiel {
  id: String;
  modele: Modele;
  salle: Salle;
  utilisateur: Utilisateur;
}

export const MaterielSchema = new Schema<Materiel>(
  {
    modele: { type: Object, required: true },
    salle: { type: Object, required: true },
    utilisateur: { type: Object, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const MaterielModel = model<Materiel>("materiel", MaterielSchema);
