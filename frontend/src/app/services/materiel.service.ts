import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MATERIELS_BY_ID_URL,
  MATERIELS_CREATE_URL,
  MATERIELS_STOCK_URL,
  MATERIELS_URL,
} from '../shared/constants/urls';
import { IMaterielCreate } from '../shared/interfaces/IMaterielCreate';
import { Materiel } from '../../domain/entity/materiel';

@Injectable({
  providedIn: 'root',
})
export class MaterielService {
  constructor(private http: HttpClient) {}

  ajouterMateriel(materiel: IMaterielCreate) {
    return this.http.post<IMaterielCreate>(MATERIELS_CREATE_URL, materiel);
  }

  getMateriels(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(MATERIELS_URL);
  }

  getMaterielById(id: string): Observable<Materiel> {
    return this.http.get<Materiel>(MATERIELS_BY_ID_URL + id);
  }

  getMaterielsStocke(id: string): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(MATERIELS_STOCK_URL);
  }
}
