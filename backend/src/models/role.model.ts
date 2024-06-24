import { Schema, model } from "mongoose";

export interface Role {
  id: string;
  intitule: string;
}

export const RoleSchema = new Schema<Role>(
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

export const RoleModel = model<Role>("role", RoleSchema);
