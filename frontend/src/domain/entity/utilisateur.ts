import { Organisme } from './organisme';
import { Role } from './role';

export class Utilisateur {
  constructor(
    public id: string,
    public nom: string,
    public email: string,
    public password: string,
    public prenom?: string,
    public organisme?: Organisme,
    public role?: Role
  ) {}
}
