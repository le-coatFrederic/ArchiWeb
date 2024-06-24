import { Schema, model } from "mongoose";
import { Organisme } from "./organisme.model";
import { Role } from "./role.model";

export interface Utilisateur {
  id: string;
  email: string;
  password: string;
  nom: string;
  prenom?: string;
  organisme?: Organisme;
  role: Role;
}

export const UtilisateurSchema = new Schema<Utilisateur>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: false },
    organisme: { type: Object, required: false },
    role: { type: Object, required: true },
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
