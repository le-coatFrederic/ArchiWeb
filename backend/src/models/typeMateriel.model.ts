import { Schema, model } from "mongoose";

export interface TypeMateriel {
  id: string;
  intitule: string;
}

export const TypeMaterielSchema = new Schema<TypeMateriel>(
  {
    intitule: { type: String, required: true },
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

export const TypeMaterielModel = model<TypeMateriel>(
  "type_materiel",
  TypeMaterielSchema
);
