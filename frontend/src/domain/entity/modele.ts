export class Materiel {
  constructor(
    public _id: string,
    public type: string,
    public modele: string,
    public intitule: string,
    public imageUrl: string,
    public emplacement: string,
    public idUtilisateur?: string
  ) {}
}
