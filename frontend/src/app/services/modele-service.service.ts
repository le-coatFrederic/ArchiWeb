import { Injectable } from '@angular/core';
import { Modele } from '../../domain/entity/modele';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MODELES_BY_ID_URL, MODELES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class ModeleService {
  private modeleList!: Modele[];
  constructor(private http: HttpClient) {}

  getModeleList(): Observable<Modele[]> {
    return this.http.get<Modele[]>(MODELES_URL);
  }

  getModeleById(id: string): Observable<Modele> {
    return this.http.get<Modele>(MODELES_BY_ID_URL + id);
  }
}
