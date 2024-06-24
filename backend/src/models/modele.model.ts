import { Schema, model } from "mongoose";
import { TypeMateriel } from "./typeMateriel.model";

export interface Modele {
  id: string;
  intitule: string;
  type: TypeMateriel;
  imageUrl: string;
}

export const ModeleSchema = new Schema<Modele>(
  {
    intitule: { type: String, required: true },
    type: { type: Object, required: true },
    imageUrl: { type: String, required: true },
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

export const ModeleModel = model<Modele>("modele", ModeleSchema);
