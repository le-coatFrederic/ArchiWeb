import { Schema, model } from "mongoose";

export interface Materiel {
  _id: string;
  type: string;
  modele: string;
  imageUrl: string;
  emplacement: string;
  idUtilisateur?: string;
}

export const MaterielSchema = new Schema<Materiel>(
  {
    type: { type: String, required: true },
    modele: { type: String, required: true },
    imageUrl: { type: String, required: true },
    emplacement: { type: String, required: true },
    idUtilisateur: { type: String, required: true },
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
