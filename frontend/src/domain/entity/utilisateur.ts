export class Utilisateur {
  constructor(
    public id: string,
    public role: string,
    public email: string,
    public password: string,
    public nom: string,
    public prenom?: string
  ) {}
}
