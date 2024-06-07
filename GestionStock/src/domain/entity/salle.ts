export class Salle {
  idSalle: string;
  numero?: number;
  etage?: number;
  adresse?: string;
  complementAdresse?: string;
  codePostal?: string;
  ville?: string;

  constructor(id: string) {
    this.idSalle = id;
  }
}
