export class Salle {
  id: string;
  numeroSalle: string;
  etage: number;
  batiment: string;
  adresse: string;
  complementAdresse: string;
  codePostal: string;
  ville: string;

  constructor(
    id: string,
    numero: string,
    etage: number,
    batiment: string,
    adresse: string,
    complementAdresse: string,
    codePostal: string,
    ville: string
  ) {
    this.id = id;
    this.numeroSalle = numero;
    this.etage = etage;
    this.batiment = batiment;
    this.adresse = adresse;
    this.complementAdresse = complementAdresse;
    this.codePostal = codePostal;
    this.ville = ville;
  }
}
