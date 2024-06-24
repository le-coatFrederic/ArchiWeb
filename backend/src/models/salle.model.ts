import { Schema, model } from "mongoose";

export interface Salle {
  id: string;
  numeroSalle?: string;
  etage?: number;
  batiment?: string;
  adresse: string;
  complementAdresse?: string;
  codePostal: string;
  ville: string;
}

export const SalleSchema = new Schema<Salle>(
  {
    numeroSalle: { type: String, required: false },
    etage: { type: Number, required: false },
    batiment: { type: String, required: false },
    adresse: { type: String, required: true },
    complementAdresse: { type: String, required: false },
    codePostal: { type: String, required: true },
    ville: { type: String, required: true },
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

export const SalleModel = model<Salle>("salle", SalleSchema);
