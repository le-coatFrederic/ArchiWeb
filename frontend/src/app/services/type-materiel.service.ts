import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeMateriel } from '../modele/TypeMateriel';

@Injectable({
    providedIn: 'root'
})
export class TypeMaterielService {

    private apiUrl = 'http://localhost:5000/api/typeMateriel';

    constructor(private http: HttpClient) { }

    ajouterTypeMateriel(type: TypeMateriel): Observable<TypeMateriel> {
        return this.http.post<TypeMateriel>(this.apiUrl + "/ajouter", type);
    }

    // Récupérer toutes les types
    getTypeMateriels(): Observable<TypeMateriel[]> {
        return this.http.get<TypeMateriel[]>(this.apiUrl+"/tous");
    }
}
