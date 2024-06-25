import { Schema, model } from "mongoose";

export interface Utilisateur {
  id: string;
  role: string;
  email: string;
  password: string;
  nom: string;
  prenom?: string;
  organisme?: string;
  token?: string;
}

export const UtilisateurSchema = new Schema<Utilisateur>(
  {
    role: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: false },
    organisme: { type: String, required: false },
    token: { type: String, required: false },
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

export const UtilisateurModel = model<Utilisateur>(
  "utilisateur",
  UtilisateurSchema
);
