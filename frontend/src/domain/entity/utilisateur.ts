export class Utilisateur {
  id!: string;
  role!: string;
  email!: string;
  password!: string;
  token!: string;
  nom!: string;
  prenom?: string;
  organisme?: string;

  constructor() {}
}
