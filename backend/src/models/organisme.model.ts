import { Schema, model } from "mongoose";

export interface Organisme {
  id: string;
  nom: string;
}

export const OrganismeSchema = new Schema<Organisme>(
  {
    nom: { type: String, required: true },
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

export const OrganismeModel = model<Organisme>("organisme", OrganismeSchema);
